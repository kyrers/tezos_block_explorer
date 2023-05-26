import React from "react";
import InitialLoad from "./InitialLoad";
import { initialLoadText } from "@/utils/strings";

describe("<InitialLoad />", () => {
  it("should render the correct message", () => {
    cy.mount(<InitialLoad />);

    cy.get('[data-cy="initial-load"]').contains(initialLoadText);
  });
});
