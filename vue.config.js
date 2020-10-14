module.exports = {
  lintOnSave: "warning",

  publicPath: process.env.NODE_ENV !== "production" ? "/" : "./",
  devServer: {
    proxy: "http://123.56.124.33:5000",
  },
};
