import React from "react";
import Header from "./Header";
import { appTitle } from "@/utils/strings";

describe("<Header />", () => {
  beforeEach(() => {
    cy.mount(<Header />);
  });

  it("should render the correct navigation link", () => {
    cy.get('[href="/"]').should("be.visible");
  });

  it("should display the correct title", () => {
    cy.get('[data-cy="app-title"]').contains(appTitle);
  });
});
