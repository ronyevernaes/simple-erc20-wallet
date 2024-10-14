import { InputText } from ".";

describe("<InputText />", () => {
  let name: string;
  let dataTest: string;
  let placeholder: string;
  let inputValue: string;
  let error: string;

  beforeEach(() => {
    name = "testInput";
    dataTest = "test-input";
    placeholder = "Enter text";
    inputValue = "Test value";
    error = "Test error message";
  });

  it("renders successfully", () => {
    cy.mount(
      <InputText
        name={name}
        value={inputValue}
        onChange={() => {}}
        dataTest={dataTest}
      />
    );

    cy.get(`[data-test="${dataTest}"]`).should("exist");
  });

  it("renders input value correctly", () => {
    cy.mount(
      <InputText
        name={name}
        value={inputValue}
        onChange={() => {}}
        dataTest={dataTest}
      />
    );
    cy.get(`[data-test="${dataTest}"]`).should("have.value", inputValue);
  });

  it("renders input placeholder correctly", () => {
    cy.mount(
      <InputText
        name={name}
        value={inputValue}
        onChange={() => {}}
        placeholder={placeholder}
        dataTest={dataTest}
      />
    );

    cy.get(`[data-test="${dataTest}"]`)
      .should("have.attr", "placeholder", placeholder);
  });


  it("calls onChange handler when input value changes", () => {
    const handleChange = cy.stub();

    cy.mount(
      <InputText
        name={name}
        value={inputValue}
        onChange={handleChange}
        dataTest={dataTest}
      />
    );

    cy.get(`[data-test="${dataTest}"]`).type("New value").then(() => {
      expect(handleChange).to.have.been.called;
    });
  });

  it("displays an error message when error prop is provided", () => {
    cy.mount(
      <InputText
        name={name}
        value={inputValue}
        onChange={() => {}}
        error={error}
        dataTest={dataTest}
      />
    );

    cy.get(`[data-test="${dataTest}-error"]`)
      .should("exist")
      .should("contain.text", error);
  });
});
