import React from "react";
import Home from "./Home";
import { errorText } from "@/utils/strings";

describe("<Home />", () => {
  beforeEach(() => {
    cy.mount(<Home />);
  });

  it("should default to error", () => {
    cy.get('[data-cy="home-error-text"]').should("be.visible");
    cy.get('[data-cy="loading-screen"]').should("not.exist");
    cy.get('[data-cy="blocks-table"]').should("not.exist");
  });

  it("should display the correct text", () => {
    cy.get('[data-cy="home-error-text"]').contains(errorText);
  });
});
