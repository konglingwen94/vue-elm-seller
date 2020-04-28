export default {
  goods: [],
  removeFood(id) {
    const targetGood = this.goods.find((item) => {
      return item.id === id;
    });

    if (targetGood) {
      targetGood.count--;
    }
  },
  addFood(food) {
    const targetGood = this.goods.find((good) => {
      return good.id === food.id;
    });
    if (targetGood) {
      targetGood.count++;
    } else {
      this.goods.push({
        id: food.id,
        price: food.price,
        count: 1,
      });
    }
    this.goods.push();
  },
};
