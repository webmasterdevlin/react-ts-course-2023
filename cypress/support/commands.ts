/// @ts-check
///<reference path="../global.d.ts" />
///<reference types="cypress" />

import "@testing-library/cypress/add-commands";


Cypress.Commands.add("getCommand", (url: string, responseBody: Array<any>) => {
    cy.intercept("GET", url, {
        status:200,
        body: responseBody
    })
})