/// <reference types="cypress" />
describe('File Upload Test', () => {

    beforeEach(() => {
        cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html');
    });

    it('should upload a file successfully', () => {
        // const fileName = 'example.json';
        // cy.fixture(fileName).then(fileContent => {
        //     cy.get().attachFile({
        //         fileContent: fileContent,
        //         fileName: fileName,
        //         mimeType: 'application/json'
        //     });
        // });
		cy.get('input[name="userfile"]').attachFile('example.json')
		cy.injectAxe()
    	cy.checkA11y()
        // // Add assertions to verify the file upload if needed
        // cy.get('input[type="submit"]').click();
        // // Add assertions to verify the file upload if needed
        // cy.contains('File uploaded successfully').should('be.visible');
    });
});