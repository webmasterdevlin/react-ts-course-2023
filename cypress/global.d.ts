/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getCommand(url: string, responseBody: Array<any>): void;
  }
}
