import { ReactNode } from "react";

import { Footer } from ".";
import "../../../index.css";

describe("<Footer />", () => {
  let dataTest: string;
  let content: ReactNode;

  beforeEach(() => {
    dataTest = "test-footer";
    content = "App Footer";
  });
  
  it("renders successfully", () => {
    cy.mount(
      <Footer dataTest={dataTest}>
        {content}
      </Footer>
    );

    cy.get(`[data-test="${dataTest}"]`).should("exist");
  });

  it("renders content correctly", () => {
    cy.mount(
      <Footer dataTest={dataTest}>
        {content}
      </Footer>
    );

    cy.get(`[data-test="${dataTest}"]`).should("contain", content);
  });
});
