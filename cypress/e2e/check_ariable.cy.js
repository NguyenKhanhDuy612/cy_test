// check aria labels all site
const checkAriaLabel = () => {
	cy.get('[aria-label]').each(($el) => {
		const ariaLabel = $el.attr('aria-label');
		cy.get($el).should('have.attr','aria-label');
		// cy.log(ariaLabel);

	});
}

// check tốc độ page
const checkSpeedPage = () => {
	cy.window().then((win) => {
		const { performance } = win;
		const time = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
		cy.log(`Page load time: ${time} ms`);
		
	});
}


const checkHeavyResources = () => {
    cy.window().then((win) => {
        const resources = win.performance.getEntriesByType('resource');
        const cssFiles = resources.filter(resource => resource.initiatorType === 'link' && resource.name.endsWith('.css'));
        const jsFiles = resources.filter(resource => resource.initiatorType === 'script' && resource.name.endsWith('.js'));

        const heaviestCss = cssFiles.reduce((max, file) => file.transferSize > max.transferSize ? file : max, { transferSize: 0 });
        const heaviestJs = jsFiles.reduce((max, file) => file.transferSize > max.transferSize ? file : max, { transferSize: 0 });

        cy.log(`Heaviest CSS file: ${heaviestCss.name} (${heaviestCss.transferSize} bytes)`);
        cy.log(`Heaviest JS file: ${heaviestJs.name} (${heaviestJs.transferSize} bytes)`);
    });
}

describe("HWV Form Tests", () => {
	beforeEach(() => {
		cy.visit("https://highwaywestdev.wpenginepowered.com/in-the-mountains/");
	});

	afterEach(() => {
		cy.wait(6000);
	});

	// it("Check aria-label", () => {
	// 	checkAriaLabel();
	// })

	it("Check speed page", () => {
		checkSpeedPage();
	})

	it("Check heavy CSS and JS files", () => {
        checkHeavyResources();
    });
})

