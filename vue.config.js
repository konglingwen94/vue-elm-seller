module.exports = {
  lintOnSave: "warning",

  publicPath: process.env.NODE_ENV !== "production" ? "/" : "./",
  devServer: {
    // proxy: "http://123.57.204.48:5000",
    proxy: "http://localhost:5000",
  },
};
