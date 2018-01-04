describe("Gilded Rose", function() {

  it("checks that this.items in an instance of Array", function() {
    expect(shop.items instanceof Array).toEqual(true)
  });

  describe("+5 Dexterity Vest", function() {
    it("reduces its sellIn from 5 to 4 when day passes", function() {
      shop.updateQuality()
      expect(shop.items[0].sellIn).toEqual(4)
    });
    it("reduces its quality from 20 to 19 when day passes", function() {
      shop.updateQuality()
      expect(shop.items[0].quality).toEqual(19)
    });
  })

  describe("Aged Brie", function() {
    it("increases its quality from 0 to 1 when a day passes", function() {
      shop.updateQuality()
      expect(shop.items[1].quality).toEqual(1)
    });
  });
});
