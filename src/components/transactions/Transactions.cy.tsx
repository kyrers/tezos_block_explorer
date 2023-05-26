import React from "react";
import Transactions from "./Transactions";
import { errorText } from "@/utils/strings";
import MockNextRouter from "@/cypress/utils/mockNextRouter";

describe("<Transactions />", () => {
  beforeEach(() => {
    cy.mount(
      <MockNextRouter>
        <Transactions />
      </MockNextRouter>
    );
  });

  it("should default to error", () => {
    cy.get('[data-cy="transactions-error-text"]').should("be.visible");
    cy.get('[data-cy="loading-screen"]').should("not.exist");
    cy.get('[data-cy="transactions-table"]').should("not.exist");
  });

  it("should display the correct text", () => {
    cy.get('[data-cy="transactions-error-text"]').contains(errorText);
  });
});
