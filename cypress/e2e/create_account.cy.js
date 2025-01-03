describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://www.checkout.com/get-test-account");
	cy.wait(5000);
    cy.get("body").then(($body) => {
      if ($body.find("#onetrust-accept-btn-handler").length > 0) {
        cy.get("button#onetrust-accept-btn-handler").click();
      }
    });
  });

  afterEach(() => {
	cy.wait(9000);
  });

  it("Not enter input",()=>{
	cy.get('input[type="submit"]').click
  })

  it("Create Account Fail mail", () => {
	

    cy.get('input[name="first-name"]').type("Duy");
    cy.get('input[name="last-name"]').type("Khanh");
    cy.get('input[name="job-title"]').type("Developer");
    cy.get('input[name="company"]').type("Screen1");
    cy.get('input[name="email"]').type("tes111t@gmail.com");

    cy.get('select[name="annual_processing"]').then(($select) => {
      cy.wrap($select).select("1 - 10 Million");
    });
    cy.get('select[name="annual_processing"]').should(
      "have.value",
      "1 - 10 Million"
    );
    cy.wait(5000);
    cy.get('input[type="submit"]').click();
  });
  it("Create Account Success", () => {
    cy.get('input[name="first-name"]').type("Duy");
    cy.get('input[name="last-name"]').type("Khanh");
    cy.get('input[name="job-title"]').type("Developer");
    cy.get('input[name="company"]').type("Screen1");
    cy.get('input[name="email"]').type("tes111t@screen1.io");

    cy.get('select[name="annual_processing"]').then(($select) => {
      cy.wrap($select).select("1 - 10 Million");
    });
    cy.get('select[name="annual_processing"]').should(
      "have.value",
      "1 - 10 Million"
    );
    cy.wait(5000);
    cy.get('input[type="submit"]').click();
  });
});
