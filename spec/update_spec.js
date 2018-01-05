describe("Update", function() {

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
    it("doesn't reduce quality if the quality is already zero",function() {
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
  });
});
