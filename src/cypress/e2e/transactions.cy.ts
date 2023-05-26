describe("TRANSACTIONS", () => {
  it("renders loading screen when isLoading is true", () => {
    cy.intercept("/api/blocks/1").as("getTransactionData");
    cy.visit("/block/1");

    cy.get('[data-cy="loading-screen"]').should("be.visible");
    cy.wait("@getTransactionData");
    cy.get('[data-cy="loading-screen"]').should("not.exist");
  });

  it("renders error message when error is present", () => {
    cy.intercept("/api/blocks/1", { statusCode: 500 }).as("getTransactionData");
    cy.visit("/block/1");
    cy.get('[data-cy="transactions-error-text"]').should("be.visible");
  });

  it("renders transactions table and go back button correctly", () => {
    cy.intercept("/api/blocks/1", { fixture: "transactions.json" }).as(
      "getTransactionData"
    );
    cy.visit("/block/1");
    cy.wait("@getTransactionData");

    cy.get('[data-cy="go-back-button"]').should("be.visible");
    cy.get('[data-cy="transactions-table"]').within(() => {
      cy.contains("Sender 1"); // Sender alias
      cy.contains("Address 1"); // Sender address
      cy.contains("Target 1"); // Target alias
      cy.contains("Address 1"); // Target address
      cy.contains("1"); // Amount
      cy.contains("applied"); // Status

      cy.contains("Sender 2"); // Sender alias
      cy.contains("Address 2"); // Sender address
      cy.contains("Target 2"); // Target alias
      cy.contains("Address 2"); // Target address
      cy.contains("2"); // Amount
      cy.contains("applied"); // Status
    });
  });

  it("go back button redirects correctly", () => {
    cy.intercept("/api/blocks/1", { fixture: "transactions.json" }).as(
      "getTransactionData"
    );
    cy.visit("/block/1");
    cy.wait("@getTransactionData");

    cy.get('[data-cy="go-back-button"]').click();
    cy.get('[data-cy="go-back-button"]').should("not.exist");
  });
});
