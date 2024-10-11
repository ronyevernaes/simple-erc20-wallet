import { ReactNode } from "react";

import { Layout } from ".";

describe("<Layout />", () => {
  let dataTest: string;
  let content: ReactNode;

  beforeEach(() => {
    dataTest = "test-layout";
    content = "App Content";
  });
  
  it("renders successfully", () => {
    cy.mount(
      <Layout dataTest={dataTest}>
        {content}
      </Layout>
    );

    cy.get(`[data-test="${dataTest}"]`).should("exist");
  });

  it("renders content correctly", () => {
    cy.mount(
      <Layout dataTest={dataTest}>
        {content}
      </Layout>
    );

    cy.get(`[data-test="${dataTest}"]`).should("contain", content);
  });
});
