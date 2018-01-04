class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const MAX_QUALITY = 50

class Shop {
  constructor(items=[]){
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
      // below line checks whether the item is unique as well as whether its quality is above zero - if so it decreases quality by 1
      if (item.name != self.unique.brie && item.name != self.unique.pass && item.name != self.unique.sulfuras && item.quality > self.MIN_QUALITY) {
        self._decreaseQuality(item, self.INCREMENT);
      } else {
        if (item.quality < self.MAX_QUALITY) {
          self._increaseQuality(item, self.INCREMENT)
          if (item.name == self.unique.pass) {
            if (item.sellIn < 11) {
              if (item.quality < self.MAX_QUALITY) {
                self._increaseQuality(item, self.INCREMENT)
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < self.MAX_QUALITY) {
                self._increaseQuality(item, self.INCREMENT)
              }
            }
          }
        }
      }
      if (item.name != self.unique.sulfuras) {
        item.sellIn -= 1;
      }
      if (item.sellIn < self.SELL_BY_DATE) {
        if (item.name != self.unique.brie) {
          if (item.name != self.unique.pass) {
            if (item.quality > self.MIN_QUALITY) {
              if (item.name != self.unique.sulfuras) {
                self._decreaseQuality(item, self.INCREMENT);
              }
            }
          } else {
            item.quality -= item.quality;
          }
        } else {
          if (item.quality < self.MAX_QUALITY) {
            self._increaseQuality(item, self.INCREMENT)
          }
        }
      }
    });

    return self.items;
  }
}
