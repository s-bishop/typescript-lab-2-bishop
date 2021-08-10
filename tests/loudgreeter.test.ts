import LoudGreeter from "../src/loudgreeter";

describe("loudGreeter test", () => {
    test("Spanish test", () => {
        //Arrange
        let spGreet = new LoudGreeter ("Hola");
        //Assert
        expect(spGreet.greet("Enrique")).toBe("Hola, Enrique!!");
    }); 
    test("Call addVolume", () => {
        //Arrange
        let spGreet = new LoudGreeter ("Hola");
        //Act
        spGreet.addVolume();
        //Assert
        expect(spGreet.greet("Enrique")).toBe("Hola, Enrique!!!");
    });
    test("Call addVolume twice", () => {
        //Arrange
        let spGreet = new LoudGreeter ("Hola");
        //Act
        spGreet.addVolume();
        spGreet.addVolume();
        //Assert
        expect(spGreet.greet("Enrique")).toBe("Hola, Enrique!!!!");
    });
    test("Call addVolume thrice", () => {
        //Arrange
        let spGreet = new LoudGreeter ("Hola");
        //Act
        spGreet.addVolume();
        spGreet.addVolume();
        spGreet.addVolume();
        //Assert
        expect(spGreet.greet("Enrique")).toBe("Hola, Enrique!!!!!");
    });
}); 