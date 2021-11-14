/// <reference types="cypress" />

import { todosFixture } from "../../../src/mocks/handlers/todoHandler";

const url = "/api/todos";

describe("Work Todos Page", () => {
  beforeEach(() => {
    cy.getCommand(url, todosFixture);
    cy.visit("/");
  });

  it("should render todo list", () => {
    cy.get("[data-testid=todo-item]").should(
      "have.length",
      todosFixture.length
    );
  });
});

describe.skip("Instagram", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display Instagram page", () => {
    cy.contains("Accept All").click();
    cy.contains("Accept All").should("not.exist");
    cy.contains("username").type("devlin.duldulao@inmeta.no");
  });
});
