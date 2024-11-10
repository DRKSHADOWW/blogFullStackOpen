
describe('Blog App', ()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:5173/')
    })
    it('should render the blog app', () => {
        cy.contains('Show Login')
    })

    it('login can be opening', ()=>{
        cy.contains("Show Login").click()
        cy.get('[data-testid="username"]').first().type('root')
        cy.get('[data-testid="password"]').last().type('salainen')
        cy.get('#form-login-button').click()
        cy.contains('signed correctly')
        
    })

    it('', ()=>{

    })
})