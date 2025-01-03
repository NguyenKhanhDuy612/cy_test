describe("template spec", () => {
  it("should login using request", () => {
    cy.request({
      method: "POST",
      url: "https://practicetestautomation.com/practice-test-login/",
      form: true,
      body: {
        username: "student",
        password: "Password123",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit("https://practicetestautomation.com/logged-in-successfully/");
      cy.get("h1").should("contain", "Logged");
    });
  });
});
