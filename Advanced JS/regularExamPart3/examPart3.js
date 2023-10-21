describe("Tests for onlineStore", function () {
  describe("isProductAvailable", function () {
    it("should return 'Great! product is available for purchase.' when stock is greater than 0", function () {
      const result = onlineStore.isProductAvailable("ProductA", 10);
      assert.strictEqual(result, "Great! ProductA is available for purchase.");
    });

    it("should return 'Sorry, product is currently out of stock.' when stock is less than or equal to 0", function () {
      const result = onlineStore.isProductAvailable("ProductB", 0);
      assert.strictEqual(result, "Sorry, ProductB is currently out of stock.");
    });

    it("should throw an error for invalid input", function () {
      assert.throws(
        () => onlineStore.isProductAvailable("ProductC", "invalid"),
        /Invalid input/
      );
    });
  });

  describe("canAffordProduct", function () {
    it("should return 'Product purchased. Your remaining balance is $10.' when there are sufficient funds", function () {
      const result = onlineStore.canAffordProduct(50, 60);
      assert.strictEqual(
        result,
        "Product purchased. Your remaining balance is $10."
      );
    });

    it("should return 'You don't have sufficient funds to buy this product.' when there are insufficient funds", function () {
      const result = onlineStore.canAffordProduct(60, 40);
      assert.strictEqual(
        result,
        "You don't have sufficient funds to buy this product."
      );
    });

    it("should throw an error for invalid input", function () {
      assert.throws(
        () => onlineStore.canAffordProduct("invalid", 40),
        /Invalid input/
      );
    });
  });

  describe("getRecommendedProducts", function () {
    it("should return recommended products in the category", function () {
      const listOfProducts = [
        { name: "Product1", category: "CategoryA" },
        { name: "Product2", category: "CategoryB" },
        { name: "Product3", category: "CategoryA" },
      ];

      const result = onlineStore.getRecommendedProducts(
        listOfProducts,
        "CategoryA"
      );
      assert.strictEqual(
        result,
        "Recommended products in the CategoryA category: Product1, Product3"
      );
    });

    it("should return a message when there are no recommended products in the category", function () {
      const listOfProducts = [
        { name: "Product1", category: "CategoryB" },
        { name: "Product2", category: "CategoryC" },
      ];

      const result = onlineStore.getRecommendedProducts(
        listOfProducts,
        "CategoryA"
      );
      assert.strictEqual(
        result,
        "Sorry, we currently have no recommended products in the CategoryA category."
      );
    });

    it("should throw an error for invalid input", function () {
      assert.throws(
        () => onlineStore.getRecommendedProducts("invalid", "CategoryA"),
        /Invalid input/
      );
    });
  });
});
