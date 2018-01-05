describe("Update", function() {

  describe("#updateGeneric", function() {
    it("decreases the quality of the item by one", function() {
      update.updateGeneric(genericItem)
      expect(genericItem.quality).toEqual(19)
    });
    it("reduces the sellIn property by 1", function() {
      update.updateGeneric(genericItem)
      expect(genericItem.sellIn).toEqual(4)
    });
  });
});
