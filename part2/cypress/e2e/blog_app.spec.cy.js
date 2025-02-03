
describe('Blog App', ()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:5173/')

        // cy.request('POST', 'http://localhost:3001/api/testing/reset')
        // const user = {
        //     "username": "root",
        //     "name": "Superuser",
        //     "password": "salainen"
        // }
        // cy.request('POST', 'http://localhost:3001/api/users', user)
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

    it('login fails with wrong password', () =>{
        cy.contains("Show Login").click()
            cy.get('[data-testid="username"]').first().type('root1')
            cy.get('[data-testid="password"]').last().type('salainen1')
            cy.get('#form-login-button').click()
            cy.get('.error').contains('Wrong credentials')
            // .should('contain', 'Wrong credentials')
            // .should('have.css', 'color', 'rgb(255, 0 , 0)')
            // .should('have.css', 'border-style', 'solid') 
    })
    
    describe('when logged in', ()=>{
        beforeEach(()=>{
        cy.Login({username: 'root', password: 'salainen'})
            
        })
        it('a new blog can be creted', ()=>{
            cy.contains('create new blog').click()
            cy.get('[data-testid="title"]').type('El camino')
            cy.get('[data-testid="author"]').type('Andrew David')
            cy.get('[data-testid="url"]').type('www.example.com')
            cy.get('#submit-create').click()
        })
    })

    describe.only('and a blog exists', () =>{
        beforeEach(()=>{
            cy.createBlog({
                title: 'El camino', 
                author: 'Andrew David', 
                url: 'www.example.com'
            })
        })

        it('', ()=>{
            
        })
        
    })

    
   
})