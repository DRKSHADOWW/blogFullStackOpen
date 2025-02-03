Cypress.Commands.add('Login', ({username, password}) => {
    cy.request('POST', 'http://localhost:3001/api/login', {
        username: username,
        password: password
    }).then(response => {
        localStorage.setItem(
            'loggedBloggedAppUser ', JSON.stringify(response.body)
        )
        cy.visit('http://localhost:5173/')
    })
})

// Cypress.Commands.add('createBlog', ({title, author, url}) => {
//     cy.request({
//         method: 'POST',
//         url: 'http://localhost:3001/api/blogs',
//         body: {title: title, author: author, url: url},
//         headers: { // Corrección aquí
//             Authorization: `Bearer ${JSON.parse(localStorage.getItem('loggedBloggedAppUser ')).token}`
//         }
//     })

// })
//     cy.visit('http://localhost:5173/')
