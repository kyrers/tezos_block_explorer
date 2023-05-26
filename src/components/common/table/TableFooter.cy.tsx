import styles from "@/styles/TableFooter.module.css";
import TableFooter from "./TableFooter";

describe("<TableFooter />", () => {
  it("should have the correct pagination style", () => {
    cy.mount(
      <TableFooter range={[1, 2, 3]} setPage={() => {}} page={1} slice={[]} />
    );

    cy.get('[data-cy="page-button-0"]').should(
      "have.class",
      `${styles.activeButton}`
    );

    cy.get('[data-cy="page-button-1"]').should(
      "have.class",
      `${styles.inactiveButton}`
    );
  });
});
