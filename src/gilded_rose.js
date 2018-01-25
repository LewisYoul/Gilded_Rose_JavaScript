class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const MAX_QUALITY = 50

class Shop {
  constructor(items=[], update = new Update()){
    this.update = update
    this.items = items;
    this.unique = {
      brie: 'Aged Brie',
      pass: 'Backstage passes to a TAFKAL80ETC concert',
      sulfuras: 'Sulfuras, Hand of Ragnaros'
    }
    this.MAX_QUALITY = 50
    this.MIN_QUALITY = 0
    this.SELL_BY_DATE = 0
    this.INCREMENT = 1
  }

  _increaseQuality(item, increment) {
    item.quality += increment
  }

  _decreaseQuality(item, increment) {
    item.quality -= increment
  }

  updateQuality() {
    var self = this
    self.items.forEach(function(item) {
      if (item.name === self.unique.brie) {
        self.update.updateBrie(item)
      } else if (item.name === self.unique.pass) {
        self.update.updatePass(item)
      } else if (item.name === self.unique.sulfuras) {
        console.log("sulfuras")
      } else {
        self.update.updateGeneric(item)
      }
    });

    return self.items;
  }
}

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
      if ((item.quality + 3) > 50) {
        item.quality = 50
      } else {
        item.quality += 3
      }
    } else if (item.sellIn <= 10) {
      if ((item.quality + 2) > 50) {
        item.quality = 50
      } else {
        item.quality += 2
      }
    } else {
      if ((item.quality + 1) > 50) {
        item.quality = 50
      } else {
        item.quality += 1
      }
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
