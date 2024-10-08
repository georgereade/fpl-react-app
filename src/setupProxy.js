const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/bootstrap-static/",
    createProxyMiddleware({
      target: "https://fantasy.premierleague.com",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
