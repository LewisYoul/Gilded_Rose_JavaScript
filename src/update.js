class Update {
  constructor() {
  }

  updateGeneric(item) {
    this._reduceSellIn(item)
    this._reduceQuality(item)
  }

  // PRIVATE

  _reduceSellIn(item) {
    item.sellIn -= 1
  }

  _reduceQuality(item) {
    if (item.sellIn >= 0) {
      item.quality -= 1
    } else {
      item.quality -= 2
    }
  }

}
