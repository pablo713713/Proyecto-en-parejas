import getInputData from "./datos.js";

describe("Mostrar", () => {
    it("Deberia mostrarse 5,5", () => {
        expect(getInputData(5, 5)).toEqual([5, 5,null,null,null,null]); 
    });
    it("Deberia mostrarse 5,5,1,2", () => {
        expect(getInputData(5, 5, 1, 2)).toEqual([5, 5, 1, 2,null,null]);
    });
    it("Deberia mostrarse 5,5,1,2 'N'", () => {
        expect(getInputData(5, 5, 1, 2,"N")).toEqual([5, 5, 1, 2,"N",null]);
    });
    it("Deberia mostrarse 5,5,1,2 'N','AIAADAAI'", () => {
        expect(getInputData(5, 5, 1, 2,"N","AIAADAAI")).toEqual([5, 5, 1, 2,"N","AIAADAAI"]);
    });
});
