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
    if (item.quality < 50) {
      item.quality += 1
    }
  }

  updatePass(item) {
    this._reduceSellIn(item)
    if (item.sellIn < 0) {
      item.quality = 0
    } else if (item.sellIn <= 5) {
      item.quality += 3
    } else if (item.sellIn <= 10) {
      item.quality += 2
    } else {
      item.quality += 1
    }
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
