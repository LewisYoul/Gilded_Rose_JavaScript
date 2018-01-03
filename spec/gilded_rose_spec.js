describe("Gilded Rose", function() {
  //
  // it("should foo", function() {
  //   const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toEqual("fixme");
  // });
  beforeEach(function() {
    items = []
    items.push(new Item('+5 Dexterity Vest', 10, 20));
    items.push(new Item('Aged Brie', 2, 0));
    items.push(new Item('Elixir of the Mongoose', 5, 7));
    items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    items.push(new Item('Sulfuras, Hand of Ragnaros', -1, 80));
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49));
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49));
    shop = new Shop(items)
  });

  it("checks that this.items in an instance of Array", function() {
    expect(shop.items instanceof Array).toEqual(true)
  });

  it("should equal 4", function() {
    expect(2 + 2).toEqual(4);
  });

});
