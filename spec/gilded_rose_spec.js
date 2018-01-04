describe("Gilded Rose", function() {

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
