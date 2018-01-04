beforeEach(function() {
  items = []
  items.push(new Item('+5 Dexterity Vest', 5, 20));
  items.push(new Item('Aged Brie', 2, 0));
  items.push(new Item('Elixir of the Mongoose', 5, 7));
  items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
  items.push(new Item('Sulfuras, Hand of Ragnaros', -1, 80));
  items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
  items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49));
  items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49));
  shop = new Shop(items)
});
