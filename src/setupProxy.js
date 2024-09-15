const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = async function (app) {
  app.use(
    "api/bootstrap-static/",
    createProxyMiddleware({
      target: "https://fantasy.premierleague.com",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
      onProxyRes: (proxyRes, req, res) => {
        const cookies = proxyRes.headers["set-cookie"];
        if (cookies) {
          res.setHeader("set-cookie", cookies); // Pass the cookies to the client
        }
      },
      onProxyReq: (proxyReq, req, res) => {
        const cookieHeader = req.headers.cookie;
        if (cookieHeader) {
          proxyReq.setHeader("cookie", cookieHeader); // Include cookies in the request
        }
      },
    })
  );
};
