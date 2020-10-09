 

module.exports = {
  lintOnSave: "warning",
  outputDir: "server/dist",
  publicPath: process.env.NODE_ENV !== "production" ? "/" : "./",
  devServer: {
     
    proxy: "http://localhost:3000",
  },
};
