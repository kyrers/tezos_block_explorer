import React from "react";
import TransactionTable from "./TransactionTable";
import data from "../../../cypress/fixtures/transactions.json";
import MockNextRouter from "@/cypress/utils/mockNextRouter";

describe("<BlockTable />", () => {
  beforeEach(() => {
    cy.mount(
      <MockNextRouter asPath="/">
        <TransactionTable data={data} rowsPerPage={10} />
      </MockNextRouter>
    );
  });

  it("should contain the correct data", () => {
    cy.get('[data-cy="transactions-table-row-1"').should("be.visible");
    cy.get('[data-cy="transactions-table-row-10"').should("be.visible");
    cy.get('[data-cy="transactions-table-row-11"').should("not.exist");
  });

  it("should change page", () => {
    cy.get('[data-cy="transactions-table-row-1"').should("be.visible");
    cy.get('[data-cy="transactions-table-row-10"').should("be.visible");
    cy.get('[data-cy="transactions-table-row-11"').should("not.exist");

    cy.get('[data-cy="page-button-1"]').click(); //change to page 2

    cy.get('[data-cy="transactions-table-row-11"').should("be.visible");
    cy.get('[data-cy="transactions-table-row-1"').should("not.exist");
    cy.get('[data-cy="transactions-table-row-10"').should("not.exist");
  });
});
