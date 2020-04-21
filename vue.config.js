const goods = require("./public/data/goods.json");
const ratings = require("./public/data/ratings.json");
const seller = require("./public/data/seller.json");

module.exports = {
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
};
