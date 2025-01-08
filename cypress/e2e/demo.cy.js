// check all alt of img
describe("HWV Form Tests", () => {
    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/cypress/e2e/index.html");
    });

    afterEach(() => {
        cy.wait(6000);
    });

	// create age variable in local storage
	it("Create age variable in local storage", () => {
		cy.window().then((win) => {
			win.localStorage.setItem('age', '25');
		}
		);
	});

    it("Check page title", () => {
        cy.title().should('eq', 'Test Page');
    });

    it("Check heading text", () => {
		// cy.visit("https://docs.cypress.io/api/table-of-contents");
        cy.get('h1').should('have.text', 'Welcome to the Test Page');
    });

    it("Check image alt text", () => {
        cy.get('img').should('have.attr', 'alt', 'Test Image');
    });
	it("Get all alt attributes of img elements", () => {
		cy.get('img').each(($el) => {
			cy.wrap($el).should('have.attr', 'alt').then((alt) => {
				cy.log(alt);
			});
		});
	});

	it("Right-click on the button", () => {
		cy.get('#testButton').rightclick();
		// Add assertions or further actions here if needed
	});

    it("Check button text", () => {
        cy.get('#testButton').should('have.text', 'Click Me');
    });

    it("Check input placeholder", () => {
        cy.get('#testInput').should('have.attr', 'placeholder', 'Enter text here');
    });

    // have
    it("Demo have", () => {
        cy.get('button').should('not.exist') // Kiểm tra rằng phần tử không tồn tại
        cy.get('input').should('have.attr', 'placeholder', 'Enter your name') // Kiểm tra rằng phần tử có thuộc tính placeholder với giá trị 'Enter your name'
        cy.get('.alert').should('have.class', 'alert-danger') // Kiểm tra rằng phần tử có lớp CSS 'alert-danger'
        cy.get('h1').should('have.text', 'Welcome') // Kiểm tra rằng phần tử có văn bản 'Welcome'
        cy.get('input[type="text"]').should('have.value', 'Cypress') // Kiểm tra rằng phần tử có giá trị 'Cypress'
        cy.get('.menu').should('be.visible') // Kiểm tra rằng phần tử hiển thị
        cy.get('.modal').should('be.hidden') // Kiểm tra rằng phần tử bị ẩn
        cy.get('ul').should('contain', 'Item 1') // Kiểm tra rằng phần tử chứa văn bản 'Item 1'
        cy.get('li').should('have.length', 3) // Kiểm tra rằng tập hợp phần tử có độ dài là 3
        cy.get('input').should('be.enabled') // Kiểm tra rằng phần tử được kích hoạt
        cy.get('input').should('be.disabled') // Kiểm tra rằng phần tử bị vô hiệu hóa
        cy.get('form').should('have.id', 'login-form') // Kiểm tra rằng phần tử có thuộc tính id với giá trị 'login-form'
        cy.get('a').should('have.attr', 'href', '/home') // Kiểm tra rằng phần tử có thuộc tính href với giá trị '/home'
        cy.get('input').should('have.prop', 'checked', true) // Kiểm tra rằng phần tử có thuộc tính checked với giá trị true
        cy.get('div').should('have.css', 'color', 'rgb(255, 0, 0)') // Kiểm tra rằng phần tử có thuộc tính CSS color với giá trị 'rgb(255, 0, 0)'
    });

    // demo to
    it("Demo to", () => {
        // Kiểm tra rằng giá trị là true
        expect(true).to.be.true

        // Kiểm tra rằng giá trị là false
        expect(false).to.be.false

        // Kiểm tra rằng một mảng có độ dài cụ thể
        expect([1, 2, 3]).to.have.length(3)

        // Kiểm tra rằng một chuỗi chứa một chuỗi con cụ thể
        expect('Hello, world!').to.contain('world')

        // Kiểm tra rằng một đối tượng có thuộc tính cụ thể
        expect({ name: 'John' }).to.have.property('name')

        // Kiểm tra rằng một số lớn hơn một số khác
        expect(10).to.be.greaterThan(5)

        // Kiểm tra rằng một số nhỏ hơn hoặc bằng một số khác
        expect(5).to.be.at.most(10)

        // Kiểm tra rằng một giá trị là null
        expect(null).to.be.null

        // Kiểm tra rằng một giá trị không phải là undefined
        expect('Cypress').to.not.be.undefined

        // Kiểm tra rằng một mảng bao gồm một phần tử cụ thể
        expect([1, 2, 3]).to.include(2)
})

})