import React from "react";
import Layout from "./Layout";
import Home from "./home/Home";

describe("<Layout />", () => {
  it("should render the correct components", () => {
    cy.mount(
      <Layout>
        <Home />
      </Layout>
    );

    cy.get('[data-cy="app-title"]').should("be.visible");
    cy.get('[data-cy="home-error-text"]').should("be.visible");
  });
});
