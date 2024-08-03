/// <reference types="cypress" />

describe('Suite de testes para exercicio', () => {
    
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Inclui um contato na lista', () => {

        cy.get('input[type="text"]').type('nome teste 1')
        cy.get('input[type="email"]').type('email@teste.com')
        cy.get('input[type="tel"]').type('123456789')
        cy.get('.adicionar').click()

        cy.get('.sc-eDDNvR.cTVgex li').last().should('have.text', 'email@teste.com')
    })

    it('altera um contato na lista', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="email"]').clear().type('email2@teste.com')

        cy.get('.alterar').click()

        cy.get('.sc-eDDNvR.cTVgex li').last().should('have.text', 'email2@teste.com')
    })

    it('remove um contato da lista', () => {
        cy.get('.delete').first().click()

        cy.get('.sc-iAEyYk').should('not.have.text', 'Gian')
    })
})
