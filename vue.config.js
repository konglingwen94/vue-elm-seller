 

module.exports = {
  lintOnSave: "warning",
  // outputDir: "server/dist",
  publicPath: process.env.NODE_ENV !== "production" ? "/" : "./",
  devServer: {
     
    // proxy: "http://123.56.124.33:5000",
  },
};
