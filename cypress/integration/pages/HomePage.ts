/// <reference types="cypress" />

import { todosFixture } from "../../../src/mocks/handlers/todoHandler";
import { Todo } from "../../../src/models/todoType";

const url = "/api/todos";

describe("Work Todos Page", () => {
  beforeEach(() => {
    cy.getCommand(url, todosFixture);
    cy.deleteCommand(`${url}/*`);
    cy.visit("/");
    cy.SetupInputFieldsCommand();
  });

  it("should render todo list", () => {
    cy.get("[data-testid=todo-item]").should(
      "have.length",
      todosFixture.length
    );
  });

  it("should remove an item after clicking the delte button", () => {
    const index = 0;
    cy.get("[data-testid=delete-button]").eq(index).click();
    cy.get("[data-testid=todo-item]").should(
      "have.length",
      todosFixture.length - 1
    );
  });

  it("should add a new todo item", () => {
    cy.fixture<Todo>("1-todo-item").then(({ title, completed }) => {
      cy.get("@Input").type(title);
      cy.postCommand(url, {
        title,
        completed,
      });
    });
    cy.get("@Save").click();

    cy.findAllByTestId("todo-item").should(
      "have.length",
      todosFixture.length + 1
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
