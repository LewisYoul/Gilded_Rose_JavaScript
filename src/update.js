class Update {
  constructor() {
  }

  updateGeneric(item) {
    this._reduceSellIn(item)
    if (item.quality > 0) {
      this._reduceQuality(item)
    }
  }

  updateBrie(item) {
    this._reduceSellIn(item)
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
