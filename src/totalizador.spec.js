import getInputData from "./datos.js";

describe("Mostrar", () => {
    it("Deberia mostrarse 5,5", () => {
        expect(getInputData(5, 5)).toEqual([5, 5,null,null,null]); 
    });

    // Nueva prueba para la posición y dirección inicial
    it("Deberia mostrarse 5,5,1,2 'N'", () => {
        expect(getInputData(5, 5, 1, 2,"N")).toEqual([5, 5, 1, 2,"N"]);
    });
});
