describe("Gilded Rose", function() {

  function sixDaysPass() {
    for (var i = 0; i < 6; i++) {
      shop.updateQuality()
    }
  }

  function oneHundredDaysPass() {
    for (var i = 0; i < 100; i++) {
      shop.updateQuality()
    }
  }

  it("checks that this.items in an instance of Array", function() {
    expect(shop.items instanceof Array).toEqual(true)
  });

  describe("+5 Dexterity Vest (generic item)", function() {
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

  describe("Backstage passes", function() {
    it("sellIn value decreases from 15 to 14 when day passes", function() {
      shop.updateQuality()
      expect(shop.items[5].sellIn).toEqual(14)
    });
    it("quality value increases from 20 to 21 when day passes", function() {
      shop.updateQuality()
      expect(shop.items[5].quality).toEqual(21)
    });
    it("quality value cannot go over 50", function() {
      shop.updateQuality()
      expect(shop.items[6].quality).toEqual(50)
    });
    it("quality drops to 0 after sellIn reaches 0", function() {
      sixDaysPass()
      expect(shop.items[7].quality).toEqual(0)
    })
  });
});
