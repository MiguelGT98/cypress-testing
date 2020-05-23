describe("https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do", () => {
  describe("Simulator", () => {
    it("Should have 24 rows of data", () => {
      cy.visit(
        "https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do"
      );

      cy.get("#dispDate").clear().type("2020-05-05").type("{enter}");

      cy.get("#creditAmount").clear().type(20000);

      cy.get("#paymentMethod").select("1");
      cy.get("#period").select("2");

      cy.get("#rate").clear().type(15);

      cy.contains("Calcular").click();

      cy.get("#shortEncuestaNafin-close").click();

      cy.get("#resultadosSimulador").should("be.visible");
      cy.get("#resultadosSimulador")
        .find("tbody")
        .find("tr")
        .should("have.length", 24);
    });
  });
});
