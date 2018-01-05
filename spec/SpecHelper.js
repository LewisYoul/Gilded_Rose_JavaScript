class MockItem {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

beforeEach(function() {
  items = []
  items.push(new MockItem('+5 Dexterity Vest', 5, 20));
  items.push(new MockItem('Aged Brie', 2, 0));
  items.push(new MockItem('Elixir of the Mongoose', 5, 7));
  items.push(new MockItem('Sulfuras, Hand of Ragnaros', 0, 80));
  items.push(new MockItem('Sulfuras, Hand of Ragnaros', -1, 80));
  items.push(new MockItem('Backstage passes to a TAFKAL80ETC concert', 15, 20));
  items.push(new MockItem('Backstage passes to a TAFKAL80ETC concert', 10, 49));
  items.push(new MockItem('Backstage passes to a TAFKAL80ETC concert', 5, 49));
  shop = new Shop(items)


  update = new Update()
  genericItem = new MockItem('+5 Dexterity Vest', 5, 20)
  genericItemsellInZero = new MockItem('+5 Dexterity Vest', 0, 2)
  brie = new MockItem('Aged Brie', 2, 0)
});
