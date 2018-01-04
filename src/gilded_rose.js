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

  increaseQuality(item, increment) {
    item.quality += increment
  }

  updateQuality() {
    var self = this
    self.items.forEach(function(item) {
      if (item.name != self.unique.brie && item.name != self.unique.pass) {
        if (item.quality > self.MIN_QUALITY) {
          if (item.name != self.unique.sulfuras) {
            item.quality -= 1;
          }
        }
      } else {
        if (item.quality < self.MAX_QUALITY) {
          self.increaseQuality(item, self.INCREMENT)
          if (item.name == self.unique.pass) {
            if (item.sellIn < 11) {
              if (item.quality < self.MAX_QUALITY) {
                self.increaseQuality(item, self.INCREMENT)
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < self.MAX_QUALITY) {
                self.increaseQuality(item, self.INCREMENT)
              }
            }
          }
        }
      }
      if (item.name != self.unique.sulfuras) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < self.SELL_BY_DATE) {
        if (item.name != self.unique.brie) {
          if (item.name != self.unique.pass) {
            if (item.quality > self.MIN_QUALITY) {
              if (item.name != self.unique.sulfuras) {
                item.quality  -= 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < self.MAX_QUALITY) {
            self.increaseQuality(item, self.INCREMENT)
          }
        }
      }
    });

    return self.items;
  }
}
