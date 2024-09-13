const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // You will call "/api" in your fetch
    createProxyMiddleware({
      target: "https://fantasy.premierleague.com", // External API
      changeOrigin: true, // Needed for virtual hosted sites
      secure: false, // Disable SSL verification if needed
      pathRewrite: {
        "^/api": "/api", // Rewrites the path so "/api" matches "/api" on the target server
      },
    })
  );
};
