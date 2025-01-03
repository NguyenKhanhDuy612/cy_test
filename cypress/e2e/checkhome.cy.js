describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://artoftesting.com/samplesiteforselenium");
  });

  afterEach(() => {});
  it("should load the homepage quickly", () => {
    cy.get("h1").should("be.visible");
    cy.window().then((win) => {
      expect(
        win.performance.timing.loadEventEnd -
          win.performance.timing.navigationStart
      ).to.be.lessThan(2000);
    });
  });
});
