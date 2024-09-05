import {getInputData, getDataIsCorrect, getPosIsCorrect, getMotionIsCorrect, turnRight, turnLeft, forward} from "./datos.js";

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
    it("Deberia mostrar si es correcto el tamaño de tabla", () => {
        expect(getDataIsCorrect(2, 2)).toEqual(true);
    });
    it("Deberia mostrar si es correcto la posicion inicial", () => {
        expect(getPosIsCorrect(2, 2 , 1, 1, "N")).toEqual(true);
    });
    it("Deberia mostrar si son correctos los movimientos", () => {
        expect(getMotionIsCorrect("AIAADAAI")).toEqual(true);
    });
    it("Debería mostrar el cambio de dirección de N a E", () => {
        expect(turnRight("N")).toEqual("E");
    });
    it("Debería mostrar el cambio de dirección de E a S", () => {
        expect(turnRight("E")).toEqual("S");
    });
    it("Debería mostrar el cambio de dirección de S a O", () => {
        expect(turnRight("S")).toEqual("O");
    });
    it("Debería mostrar el cambio de dirección de O a N", () => {
        expect(turnRight("O")).toEqual("N");
    });
    it("Debería mostrar el cambio de dirección de N a O", () => {
        expect(turnLeft("N")).toEqual("O");
    });
    it("Debería mostrar el cambio de dirección de O a S", () => {
        expect(turnLeft("O")).toEqual("S");
    });
    it("Debería mostrar el cambio de dirección de S a E", () => {
        expect(turnLeft("S")).toEqual("E");
    });
    it("Debería mostrar el cambio de dirección de E a N", () => {
        expect(turnLeft("E")).toEqual("N");
    });
    it("Debería mostrar como avannza adelante, mirando al norte", () => {
        expect(forward(5, 5, 1, 2,"N","A")).toEqual([1, 3,"N"]);
    });
    it("Debería mostrar como avannza adelante, mirando al sud", () => {
        expect(forward(5, 5, 1, 2,"S","A")).toEqual([1, 1,"S"]);
    });
    it("Debería mostrar como avannza adelante, mirando al oeste", () => {
        expect(forward(5, 5, 1, 2,"O","A")).toEqual([0, 2,"O"]);
    });
    it("Debería mostrar como avannza adelante, mirando al este", () => {
        expect(forward(5, 5, 1, 2,"E","A")).toEqual([2, 2,"E"]);
    });
});
