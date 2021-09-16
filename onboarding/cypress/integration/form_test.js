describe("Forms App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  //Helpers
  const firstNameInput = () => cy.get("input[name=first_name]");
  const lastNameInput = () => cy.get("input[name=last_name]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const termsOfServiceInput = () => cy.get("input[name=termsOfService]");
  const submitBtn = () => cy.get("button[id=submitButton]");

  it("sanity check to make sure tests work", () => {
    // 'it' is a test
    // 'expect' is an assertion
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5); // strict equality === !===
    expect({}).not.to.equal({}); //strict equality === !===
    expect({}).to.eql({}); // not strict == !==
  });

  it("the proper elements are showing", () => {
    firstNameInput().should("exist");
    lastNameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    termsOfServiceInput().should("exist");
    submitBtn().should("exist");
  });

  describe("filling out inputs", () => {
    // it("can navigate to the site", () => {
    //   cy.url().should("include", "localhost:3001");
    // });

    it("submit button starts out disabled", () => {
      submitBtn().should("be.disabled");
    });

    it("can type in the inputs", () => {
      firstNameInput()
        .should("have.value", "")
        .type("Testing...")
        .should("have.value", "Testing...");
      lastNameInput()
        .should("have.value", "")
        .type("Testing...")
        .should("have.value", "Testing...");
      emailInput()
        .should("have.value", "")
        .type("Testing@test.com")
        .should("have.value", "Testing@test.com");
      passwordInput()
        .should("have.value", "")
        .type("Testing@test.com")
        .should("have.value", "Testing@test.com");
    });
    it("can check tos box", () => {
      termsOfServiceInput().click();
      termsOfServiceInput().should("have.checked", "true");
    });
  });

  describe("Submitting a new user", () => {
    it("can submit a new user", () => {
      firstNameInput().type("Testing...");
      lastNameInput().type("Testing...");
      emailInput().type("Test@test.com");
      passwordInput().type("Testing...");
      submitBtn().click();
      cy.contains("Testing...");
    });
    it("form validation if input is left empty", () => {
      firstNameInput().type("Testing...");
      lastNameInput().type("Testing...");
      emailInput().type(" ");
      passwordInput().type("Testing...");
      termsOfServiceInput().click();
      termsOfServiceInput().should("have.checked", "true");
      submitBtn().should("be.disabled");
    });
  });
});
