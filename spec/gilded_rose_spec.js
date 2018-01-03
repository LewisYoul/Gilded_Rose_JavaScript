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
    shop = new Shop(items)
  });

  it("checks that this.items in an instance of Array", function() {
    expect(shop.items instanceof Array).toEqual(true)
  });

  it("reduces the sellIn value of the first item in the array", function() {
    shop.updateQuality()
    expect(shop.items[0].sellIn).toEqual(9)
  });

  it("reduces the quality value of the first item in the array", function() {
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(19)
  });

  it("should equal 4", function() {
    expect(2 + 2).toEqual(4);
  });

});
