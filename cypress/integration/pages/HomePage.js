describe("Instagram", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display Instagram page", () => {
    cy.contains("Accept All").click();
    cy.contains("Accept All").should("not.exist");
    cy.contains("username").type("devlin.duldulao@inmeta.no");
  });
});
