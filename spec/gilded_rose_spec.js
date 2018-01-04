describe("Gilded Rose", function() {

  function oneHundredDaysPass() {
    for (var i = 0; i < 100; i++) {
      shop.updateQuality()
    }
  }

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
    it("reduces its sellIn from 2 to 1 when day passes", function() {
      shop.updateQuality()
      expect(shop.items[1].sellIn).toEqual(1)
    });
    it("increases its quality from 0 to 1 when a day passes", function() {
      shop.updateQuality()
      expect(shop.items[1].quality).toEqual(1)
    });
    it("cannot have a quality score of over 50", function() {
      oneHundredDaysPass()
      expect(shop.items[1].quality).toEqual(50)
    });
  });

  describe("Sulfuras", function() {
    it("doesn't decrease sellIn value when day passes", function() {
      shop.updateQuality()
      expect(shop.items[3].sellIn).toEqual(0)
    });
    it("doesn't decrease quality value when day passes", function() {
      shop.updateQuality()
      expect(shop.items[3].quality).toEqual(80)
    });
    it("doesn't decrease sellIn value when day passes", function() {
      shop.updateQuality()
      expect(shop.items[4].sellIn).toEqual(-1)
    });
    it("doesn't decrease quality value when day passes", function() {
      shop.updateQuality()
      expect(shop.items[4].quality).toEqual(80)
    });
  });
});
