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
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != this.unique.brie && this.items[i].name != this.unique.pass) {
        if (this.items[i].quality > this.MIN_QUALITY) {
          if (this.items[i].name != this.unique.sulfuras) {
            this.items[i].quality -= 1;
          }
        }
      } else {
        if (this.items[i].quality < this.MAX_QUALITY) {
          this.items[i].quality += 1;
          if (this.items[i].name == this.unique.pass) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < this.MAX_QUALITY) {
                this.items[i].quality += 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < this.MAX_QUALITY) {
                this.items[i].quality += 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != this.unique.sulfuras) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != this.unique.brie) {
          if (this.items[i].name != this.unique.pass) {
            if (this.items[i].quality > this.MIN_QUALITY) {
              if (this.items[i].name != this.unique.sulfuras) {
                this.items[i].quality  -= 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < this.MAX_QUALITY) {
            this.items[i].quality  += 1;
          }
        }
      }
    }

    return this.items;
  }
}
