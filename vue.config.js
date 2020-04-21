const goods = require("./public/data/goods.json");
const ratings = require("./public/data/ratings.json");
const seller = require("./public/data/seller.json");

module.exports = {
  lintOnSave:'warning',

  devServer: {
    before(app) {
      app.get("/api/ratings", (req, res) => {
        res.send(ratings);
      });
      app.get("/api/goods", (req, res) => {
        res.send(goods);
      });
      app.get("/api/seller", (req, res) => {
        res.send(seller);
      });
    },
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  }
};
