import showTam from "./datos.js"


describe("Mostrar", () => {
    it("Deberia mostrarse 5,5", () => {
        expect(showTam(5,5)).toEqual([5,5]); 
    });

});
