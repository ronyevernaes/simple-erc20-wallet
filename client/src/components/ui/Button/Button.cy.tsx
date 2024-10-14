import { ReactNode } from "react";

import { Button } from ".";

describe("<Button />", () => {
  let dataTest: string;
  let content: ReactNode;

  beforeEach(() => {
    dataTest = "test-button";
    content = "Click Me";
  });
  
  it("renders successfully", () => {
    cy.mount(
      <Button dataTest={dataTest}>
        {content}
      </Button>
    );

    cy.get(`[data-test="${dataTest}"]`).should("exist");
  });

  it("renders content correctly", () => {
    cy.mount(
      <Button dataTest={dataTest}>
        {content}
      </Button>
    );

    cy.get(`[data-test="${dataTest}"]`).should("contain", content);
  });

  it("triggers onClick event correcly", () => {
    const onClick = cy.stub();

    cy.mount(
      <Button dataTest={dataTest} onClick={onClick}>
        {content}
      </Button>
    );

    cy.get(`[data-test="${dataTest}"]`).click().then(() => {
      expect(onClick).to.have.been.called;
    });
  });

  it("asserts that the button is enabled by default", () => {
    cy.mount(
      <Button dataTest={dataTest}>
        {content}
      </Button>
    );

    cy.get(`[data-test="${dataTest}"]`)
      .should("not.have.attr", "disabled");
  });

  it("asserts that the button is disabled", () => {
    const onClick = cy.stub();

    cy.mount(
      <Button dataTest={dataTest} disabled onClick={onClick}>
        {content}
      </Button>
    );

    cy.get(`[data-test="${dataTest}"]`)
      .should("have.attr", "disabled");

    cy.get(`[data-test="${dataTest}"]`)
      .click({ force: true })
      .then(() => {
        expect(onClick).not.to.have.been.called;
      });
  });
});
