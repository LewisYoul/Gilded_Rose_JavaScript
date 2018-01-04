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
      // checks whether the item is unique as well as whether its quality is above zero - if so it decreases quality by 1
      if (item.name != self.unique.brie && item.name != self.unique.pass && item.name != self.unique.sulfuras && item.quality > self.MIN_QUALITY) {
        self._decreaseQuality(item, self.INCREMENT);
      } else {
        // next line increases quality by 1 because remaining items are all unique (no check for sulfuras?)
        if (item.quality < self.MAX_QUALITY) {
          self._increaseQuality(item, self.INCREMENT)
          //  if the item is a pass and its sellIn is < 11 increase quality
          if (item.name == self.unique.pass && item.sellIn < 11 && item.quality < self.MAX_QUALITY) {
            self._increaseQuality(item, self.INCREMENT)
            // if pass, sells in 5 days or less increase quality
            if (item.sellIn < 6 && item.quality < self.MAX_QUALITY) {
              self._increaseQuality(item, self.INCREMENT)
            }
          }
        }
      }
      // reduces the sellIn value if the item is not sulfuras
      if (item.name != self.unique.sulfuras) {
        item.sellIn -= 1;
      }
      // this section decreases the quality by 1 extra if the item is passed its sell by date
      if (item.sellIn < self.SELL_BY_DATE) {
        if (item.name != self.unique.brie) {
          if (item.name != self.unique.pass) {
            if (item.quality > self.MIN_QUALITY && item.name != self.unique.sulfuras) {
                self._decreaseQuality(item, self.INCREMENT);
            }
          } else if (item.quality < self.MAX_QUALITY) {
            self._increaseQuality(item, self.INCREMENT)
          } else {
            // set the item quality to zero
            item.quality -= item.quality;
          }
        }
      }
    });

    return self.items;
  }
}
