describe("HOME", () => {
  it("renders loading screen when isLoading is true", () => {
    cy.intercept("/api/blocks").as("getBlockData");
    cy.visit("/");

    cy.get('[data-cy="loading-screen"]').should("be.visible");
    cy.wait("@getBlockData");
    cy.get('[data-cy="loading-screen"]').should("not.exist");
  });

  it("renders error message when error is present", () => {
    cy.intercept("/api/blocks", { statusCode: 500 }).as("getBlockData");
    cy.visit("/");
    cy.get('[data-cy="home-error-text"]').should("be.visible");
  });

  it("renders block table with correct data", () => {
    cy.intercept("/api/blocks", { fixture: "blocks.json" }).as("getBlockData");
    cy.visit("/");
    cy.wait("@getBlockData");
    cy.get('[data-cy="blocks-table"]').within(() => {
      cy.contains("1"); // Level
      cy.contains("Proposer 1"); // Proposer alias
      cy.contains("Address 1"); // Proposer address
      cy.contains("10"); // Transaction count
      cy.contains("2023-05-25T08:00:00Z"); // Timestamp

      cy.contains("10"); // Level
      cy.contains("Proposer 10"); // Proposer alias
      cy.contains("Address 10"); // Proposer address
      cy.contains("55"); // Transaction count
      cy.contains("2023-05-25T17:00:00Z"); // Timestamp
    });
  });

  it("should redirect on row click", () => {
    cy.intercept("/api/blocks", { fixture: "blocks.json" }).as("getBlockData");
    cy.visit("/");
    cy.wait("@getBlockData");
    cy.get('[data-cy="blocks-table-row-1"').click();
    cy.url().should("include", "block/1");
  });
});
