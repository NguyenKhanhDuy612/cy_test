// check submit form https://highwaywestdev.wpenginepowered.com/form/
const submitForm = (first_name, last_name, email, subject, message) => {
	if (first_name !== undefined && first_name !== "") {
		cy.get('label').contains('First Name').next('input').type(first_name);
	}
	if (last_name !== undefined && last_name !== "") {
		cy.get('label').contains('Last Name').next('input').type(last_name);
	}
	if (email !== undefined && email !== "") {
		cy.get('label').contains('Email Address').next().find('input[type="email"]').type(email);
	}
	if (subject !== undefined && subject !== "") {
		cy.get('label').contains('Subject').next().find('input').type(subject);
	}
	if (message !== undefined && message !== "") {
		cy.get('label').contains('Message').next().find('textarea').type(message);
	}

	cy.wait(5000);
	cy.get('input[type="submit"]').click();
};

const showValidationMessage = (selector, message) => {
	cy.get(selector).should('contain', message);
};

const getTextThanks = () => {
	cy.wait(5000);
	cy.get('.story-info').then(($el) => {
		const text = $el.text();
		cy.log(text);
	});
};


describe("HWV Form Tests", () => {
	  beforeEach(() => {
		cy.visit("https://highwaywestdev.wpenginepowered.com/form/");
	});

	afterEach(() => {
		cy.wait(6000);
	});

	it("Not enter input",()=>{
		cy.get('input[type="submit"]').click();
		cy.get('.gfield_validation_message').should('contain', 'This field is required.');
	})

	// not name
	it("should submit form fail name", () => {
		const first_name = "";
		const last_name = "";
		const email = "test123@gmail.com";
		const subject = "Test Form";
		const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis, varius felis nec, ultricies nunc. Nulla facilisi. Sed nec tortor sed";
		submitForm(first_name, last_name, email, subject, message);
		showValidationMessage('.gfield_validation_message', 'This field is required.');
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
	submitForm(first_name, last_name, email, subject, message);
	getTextThanks();
  });
})