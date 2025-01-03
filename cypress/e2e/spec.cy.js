describe('template spec', () => {
  // it('passes', () => {
  //   cy.visit('https://get.brident.com/')
  //   cy.get('h1 span').should('contain', 'Book your')
  //   // cy.get('button').should('be.visible').click()
  // })

  // it('check form', () => {
  //   cy.visit('https://goemlerdev.wpengine.com/')
  //   cy.get('form')
  //   cy.wait(1000)
  //   cy.get('input[type="checkbox"]').check()
  //   // cy.get('h1').should('contain', 'Thank you')

  // })
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
  })

  afterEach(() => {
    // waiting for 2 seconds
    cy.wait(2000)
    cy.contains('Log out').click()
  })

  it('should login successfully', () => {
    const password = 'Password123';
    cy.get('input[name="username"]').type('student')
    cy.get('input[name="password"]').type(`${password}{enter}`)
    cy.get('button#submit').click()
    cy.url().should('include', '/logged-in-successfully')
    cy.get('h1').should('contain', 'Logged')
    
  })

  it('should login using cy.request', () => {
    cy.request({
      method: 'POST',
      url: 'https://practicetestautomation.com/practice-test-login/',
      form: true,
      body: {
        username: 'student',
        password: 'Password123'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.visit('https://practicetestautomation.com/logged-in-successfully/')
      cy.get('h1').should('contain', 'Logged')
    })
  })

  it('Create Account', () => {
    cy.visit('https://www.checkout.com/get-test-account'),
    cy.get('input[name="first-name"]').type('Duy')
    cy.get('input[name="last-name"]').type('Khanh')
    cy.get('input[name="job-title"]').type('Developer')
    cy.get('input[name="company"]').type('Screen1')
    cy.get('input[name="email"]').type('tes111t@screen1.io')

    cy.get('select[name="annual_processing"]').then($select => {
      cy.wrap($select).select('1 - 10 Million')
    })
    cy.get('select[name="annual_processing"]').should('have.value', '1 - 10 Million')

    cy.get('input[type="submit"]').click()
  })

  // select radio in the https://artoftesting.com/samplesiteforselenium
  it('Select radio', () => {
    cy.visit('https://artoftesting.com/samplesiteforselenium')

    cy.get('input[name="firstName"]#fname').type('Duy')

    cy.get('input[type="radio"]').check
    cy.get('input[type="radio"]#male').check()

    cy.get('input[type="checkbox"].Performance').check()

    // select dropdown list 
    cy.get('select#testingDropdown').select('Database Testing')
  })

 
})

// npx cypress run --record --key 54354e65-3820-4ee1-9338-e75457f7c8b5