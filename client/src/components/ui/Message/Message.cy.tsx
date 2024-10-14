import { Message } from ".";
import "../../../index.css";

describe("<Message />", () => {
  let dataTest: string;
  let text: string;
  let type: "info" | "success" | "error" | "warning";

  beforeEach(() => {
    dataTest = "test-message";
    text = "Test message";
    type = "info";
  });

  it("renders successfully", () => {
    cy.mount(<Message dataTest={dataTest}>{text}</Message>);
    cy.get(`[data-test="${dataTest}"]`).should("exist");
  });

  it("renders text content", () => {
    cy.mount(<Message dataTest={dataTest}>{text}</Message>);
    cy.get(`[data-test="${dataTest}"]`).should("contain", text);
  });

  it("renders with default type", () => {
    cy.mount(<Message dataTest={dataTest}>{text}</Message>);
    cy.get(`[data-test="${dataTest}"]`).should("have.class", "message-info");
  });

  it("renders with info type", () => {
    cy.mount(<Message type="info" dataTest={dataTest}>{text}</Message>);
    cy.get(`[data-test="${dataTest}"]`).should("have.class", "message-info");
  });

  it("renders with success type", () => {
    cy.mount(
      <Message type="success" dataTest={dataTest}>{text}</Message>
    );

    cy.get(`[data-test="${dataTest}"]`).should("have.class", "message-success");
  });

  it("renders with error type", () => {
    cy.mount(<Message type="error" dataTest={dataTest}>{text}</Message>);
    cy.get(`[data-test="${dataTest}"]`).should("have.class", "message-error");
  });

  it("renders with warning type", () => {
    cy.mount(<Message type="warning" dataTest={dataTest}>{text}</Message>);
    cy.get(`[data-test="${dataTest}"]`).should("have.class", "message-warning");
  });
});