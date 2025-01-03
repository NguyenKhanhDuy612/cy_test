// check submit form https://highwaywestdev.wpenginepowered.com/form/
const submitForm = (first_name, last_name, email, subject, message) => {
	cy.get('label').contains('First Name').next('input').type(`${first_name}`);
	cy.get('label').contains('Last Name').next('input').type(`${last_name}`);
	cy.get('label').contains('Email Address').next().find('input[type="email"]').type(`${email}`);
	cy.get('label').contains('Subject').next().find('input').type(`${subject}`);
	cy.get('label').contains('Message').next().find('textarea').type(`${message}`);

	cy.wait(5000);
	cy.get('input[type="submit"]').click();
};

const showValidationMessage = (selector, message) => {
	cy.get(selector).should('contain', message);
};

describe("HWV Form Tests", () => {
	  beforeEach(() => {
		cy.visit("https://highwaywestdev.wpenginepowered.com/form/");
	});

	afterEach(() => {
		cy.wait(9000);
	});

	it("Not enter input",()=>{
		cy.get('input[type="submit"]').click();
		cy.get('.gfield_validation_message').should('contain', 'This field is required.');
	})

	it("should submit form fail mail", () => {
		const first_name = "test";
		const last_name = "test";
		const email = "test123gmail.com";
		const subject = "Test Form";
		const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis, varius felis nec, ultricies nunc. Nulla facilisi. Sed nec tortor sed	turpis aliquet lacinia. Nullam ut nunc auctor, tincidunt est nec, ultricies nunc. Nulla facilisi. Sed nec tortor sed";
		submitForm(first_name, last_name, email, subject, message);
		showValidationMessage('.gfield_validation_message', 'The email address');
	})

  it("should submit form success", () => {
	const first_name = "test";
	const last_name = "test";
	const email = "test123@gmail.com";
	const subject = "Test Form";
	const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis, varius felis nec, ultricies nunc. Nulla facilisi. Sed nec tortor sed turpis aliquet lacinia. Nullam ut nunc auctor, tincidunt est nec, ultricies nunc. Nulla facilisi. Sed nec tortor sed";
	// enter after label text
	submitForm(first_name, last_name, email, subject, message);
  });
})