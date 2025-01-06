// check all alt of img
const checkAltImg = () => {
	cy.get('img').each(($el) => {
		const alt = $el.attr('alt');
		cy.get($el).should('have.attr','alt');
		// cy.log(alt);
	});
};

// check how many GB the photo contains
const checkSizeImg = () => {
	cy.get('img').each(($el) => {
		const size = $el.attr('src');
		cy.get($el).should('have.attr', 'src');
		
		cy.request(size).then((response) => {
			const contentType = response.headers['content-type'];
			cy.log(`Content-type: ${contentType}`);
			// cy.log(`response.headers: ${JSON.stringify(response.headers)}`);

			if (contentType === 'image/png' || contentType === 'image/jpeg') {
				const fileSize = response.headers['content-length'];
				const fileSizeInMB = fileSize / 1048576;
				cy.log(`Image file size: ${fileSizeInMB} MB, Content-type: ${contentType}`);
				if (fileSizeInMB > 1048576) {
					cy.log(`Warning: Image file size is too large (${fileSizeInMB} MB)`); 
				}
			} else {
				const bodySize = new Blob([response.body]).size;
				const bodySizeInMB = bodySize / 1048576;
				cy.log(`Image body size: ${bodySizeInMB} MB, Content-type: ${contentType}`);
			}
		});
	});
};  

describe("HWV Form Tests", () => {
	beforeEach(() => {
		cy.visit("https://highwaywestdev.wpenginepowered.com/in-the-mountains/");
	});

	afterEach(() => {
		cy.wait(6000);
	});

	it("Check alt img", () => {
		checkAltImg();
		checkSizeImg();
	})
})
