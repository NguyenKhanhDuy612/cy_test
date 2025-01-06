const namePage =(namePage) => {
	cy.get('meta').then(($meta) => {
		let descriptionMeta = $meta.filter(`[name="${namePage}"]`);
		if (descriptionMeta.length > 0) {
			cy.log(descriptionMeta.attr('name'), " ==>> content: ",descriptionMeta.attr('content'));
			cy.wrap(descriptionMeta).should('have.attr', 'content').and('not.be.empty');
		} else {
			cy.log(`No meta tag with name="${namePage}" found`);
		}
	});
};

const checkAltImg = () => {
	cy.get('img').each(($el) => {
		const alt = $el.attr('alt');
		cy.get($el).should('have.attr','alt');
		// cy.log(alt);
	});
};

// check SEO of page
const checkSEO = () => {
	cy.title().should('not.be.empty');
	namePage('description');
	cy.get('h1').should('exist').and('not.be.empty');
	namePage('keywords');
	namePage('robots');
	checkAltImg();
	}
describe("HWV Form Tests", () => {
	beforeEach(() => {
		cy.visit("https://highwaywestdev.wpenginepowered.com/in-the-mountains/");
	});

	afterEach(() => {
		cy.wait(6000);
	});

	it("Check SEO", () => {
		checkSEO();
	})
})