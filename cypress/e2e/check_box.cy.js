describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://artoftesting.com/samplesiteforselenium");
  });

  afterEach(() => {});
  it("Select radio", () => {
    cy.get('input[name="firstName"]#fname').type("Duy");

    cy.get('input[type="radio"]').check;
    cy.get('input[type="radio"]#male').check();

    cy.get('input[type="checkbox"].Performance').check();

    // select dropdown list
    cy.get("select#testingDropdown").select("Database Testing");
  });
});
