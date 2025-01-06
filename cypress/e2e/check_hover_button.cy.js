// check hover button
const checkHoverButton = () => {
	cy.get('button').each(($el) => {
		cy.get($el).trigger('mouseover');
	});
};

// check hover element a
const checkHoverA = () => {
    cy.get('.menu-main').should(($el) => {
        expect($el).to.have.css('opacity').not.equal('0');
    }).then(() => {
        cy.get('li.menu-item-has-children').each(($el) => {
            cy.wrap($el).should('be.visible').trigger('mouseover');
        });
    });
};

describe("HWV Form Tests", () => {
	beforeEach(() => {
		cy.visit("https://highwaywestdev.wpenginepowered.com/");
	});

	afterEach(() => {
		cy.wait(6000);
	});

	it("Check hover button", () => {
		// checkHoverButton();
		checkHoverA()
	})
})