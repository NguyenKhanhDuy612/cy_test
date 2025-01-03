const login = (username, password) => {
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get("button#submit").click();
  cy.wait(5000);
};

const checkLoginSuccess = () => {
  cy.url().should("include", "/logged-in-successfully");
  cy.get("h1").should("contain", "Logged");
};

describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });

	afterEach(() => {
		cy.wait(9000);
	});

  it("should login fail name", () => {
    const name = "student123";
    const password = "Password";
    login(name, password);
    cy.get("#error").should("contain", "Your username is invalid!");
  });

	it("should login fail pass", () => {
    const name = "student";
    const password = "Password";
    login(name, password);
    cy.get("#error").should("contain", "Your password is invalid!");
  });

  it("should login successfully", () => {
    const name = "student";
    const password = "Password123";
    login(name, password);
    checkLoginSuccess();
  });
});