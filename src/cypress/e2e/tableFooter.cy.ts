describe("TABLE FOOTER", () => {
  it("renders the correct number of pages", () => {
    cy.intercept("/api/blocks", { fixture: "blocks.json" }).as("getBlockData");
    cy.visit("/");
    cy.wait("@getBlockData");
    cy.get('[data-cy="table-footer"]').within(() => {
      cy.contains("1");
      cy.contains("2");
    });
  });

  it("pagination buttons work correctly", () => {
    cy.intercept("/api/blocks", { fixture: "blocks.json" }).as("getBlockData");
    cy.visit("/");
    cy.wait("@getBlockData");

    cy.get('[data-cy="blocks-table-row-1"').should("be.visible");
    cy.get('[data-cy="blocks-table-row-10"').should("be.visible");
    cy.get('[data-cy="blocks-table-row-11"').should("not.exist");

    cy.get('[data-cy="page-button-1"]').click(); //change to page 2

    cy.get('[data-cy="blocks-table-row-11"').should("be.visible");
    cy.get('[data-cy="blocks-table-row-1"').should("not.exist");
    cy.get('[data-cy="blocks-table-row-10"').should("not.exist");
  });
});
