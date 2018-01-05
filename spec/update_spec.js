describe("Update", function() {

  describe("#updateGeneric", function() {
    it("decreases the quality of the item by one", function() {
      update.updateGeneric(genericItem)
      expect(genericItem.quality).toEqual(19)
    });
  });
});
