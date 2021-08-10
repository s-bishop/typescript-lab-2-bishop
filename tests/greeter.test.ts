import {Greeter} from "../src/greeter";

describe("Greeter class test", () => {
    test("greeting", () => {
        let greets = new Greeter("Bonjour"); 
        expect(greets.greet("Pierre")).toBe("Bonjour, Pierre!");
    });
    test("with name", () => {
        let greets = new Greeter("guten Morgen");
        expect(greets.greet("Hanz")).toBe("guten Morgen, Hanz!");
    })
});