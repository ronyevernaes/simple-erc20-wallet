import { ReactNode } from "react";

import { Header } from ".";

describe("<Header />", () => {
  let dataTest: string;
  let content: ReactNode;

  beforeEach(() => {
    dataTest = "test-header";
    content = "App Title";
  });
  
  it("renders successfully", () => {
    cy.mount(
      <Header dataTest={dataTest}>
        {content}
      </Header>
    );

    cy.get(`[data-test="${dataTest}"]`).should("exist");
  });

  it("renders content correctly", () => {
    cy.mount(
      <Header dataTest={dataTest}>
        {content}
      </Header>
    );

    cy.get(`[data-test="${dataTest}"]`).should("contain", content);
  });
});
