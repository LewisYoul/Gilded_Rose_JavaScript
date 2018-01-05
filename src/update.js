class Update {
  constructor() {
  }

  updateGeneric(item) {
    this._reduceQualityByOne(item)
    this._reduceSellInByOne(item)
  }

  // PRIVATE

  _reduceQualityByOne(item) {
    item.quality -= 1
  }

  _reduceSellInByOne(item) {
    item.sellIn -= 1
  }
}
