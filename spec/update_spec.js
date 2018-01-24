class MockItem {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

describe("Update", function() {

  beforeEach(function() {
    update = new Update()
    genericItem = new MockItem('+5 Dexterity Vest', 5, 20)
    genericItemsellInZero = new MockItem('+5 Dexterity Vest', 0, 2)
    brie = new MockItem('Aged Brie', 2, 0)
    passSellInOverTen = new MockItem('Pass', 15, 5)
    passSellInUnderTen = new MockItem('Pass', 10, 5)
    passSellInUnderFive = new MockItem('Pass', 5, 5)
  });

  function sixtyDaysPass() {
    for (var i = 0; i < 60; i ++) {
      update.updateBrie(brie)
    }
  }

  describe("#updateGeneric", function() {
    it("reduces the sellIn property by 1", function() {
      update.updateGeneric(genericItem)
      expect(genericItem.sellIn).toEqual(4)
    });
    it("decreases the quality of the item by one", function() {
      update.updateGeneric(genericItem)
      expect(genericItem.quality).toEqual(19)
    });
    it("reduces the quality by two if passed sell by date", function() {
      update.updateGeneric(genericItemsellInZero)
      expect(genericItemsellInZero.quality).toEqual(0)
    });
    it("item quality can't be below zero",function() {
      update.updateGeneric(genericItemsellInZero)
      update.updateGeneric(genericItemsellInZero)
      expect(genericItemsellInZero.quality).toEqual(0)
    });
  });

  describe("#updateBrie", function() {
    it("reduces the sellIn by one", function() {
      update.updateBrie(brie)
      expect(brie.sellIn).toEqual(1)
    });
    it("increases the quality by one", function() {
      update.updateBrie(brie)
      expect(brie.quality).toEqual(1)
    });
    it("quality can't go above 50", function() {
      sixtyDaysPass()
      expect(brie.quality).toEqual(50)
    });
  });

  describe("#updatePass", function() {
    it("reduces the sellIn by one", function() {
      update.updatePass(passSellInOverTen)
      expect(passSellInOverTen.sellIn).toEqual(14)
    });
    it("increases quality by 1 if sellIn is over 10", function() {
      update.updatePass(passSellInOverTen)
      expect(passSellInOverTen.quality).toEqual(6)
    });
    it("increases quality by 2 if sellIn is 10 or under", function() {
      update.updatePass(passSellInUnderTen)
      expect(passSellInUnderTen.quality).toEqual(7)
    });
    it("increases quality by 3 if sellIn is 5 or under", function() {
      update.updatePass(passSellInUnderFive)
      expect(passSellInUnderFive.quality).toEqual(8)
    });
  });

});
