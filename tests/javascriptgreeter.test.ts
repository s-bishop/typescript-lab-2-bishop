import { JavaScriptGreeter } from "../src/javascriptgreeter";

describe("JavaScriptGreeter class test", () => {
    test("new javascriptgreeter greeter", () => {
        let jsGreets = new JavaScriptGreeter("guten Morgen"); 
      expect(jsGreets.greet("Hanz")).toBe("console.log('guten Morgen, Hanz!')");
    });
    test("new javascriptgreeter greeter", () => {
        let jsGreets = new JavaScriptGreeter("Ciao"); 
      expect(jsGreets.greet("Guido")).toBe("console.log('Ciao, Guido!')");
    });
});