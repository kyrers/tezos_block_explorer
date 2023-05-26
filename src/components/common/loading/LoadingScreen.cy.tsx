import React from "react";
import LoadingScreen from "./LoadingScreen";
import { loadingText } from "@/utils/strings";

describe("<LoadingScreen />", () => {
  beforeEach(() => {
    cy.mount(<LoadingScreen />);
  });

  it("should display the loading ripple", () => {
    cy.get('[data-cy="loading-ripple"]').should("be.visible");
  });

  it("should display the correct loading text", () => {
    cy.get('[data-cy="loading-text"]').contains(loadingText);
  });
});
