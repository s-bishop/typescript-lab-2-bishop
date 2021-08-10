import HtmlGreeter from "../src/htmlgreeter";

describe("HtmlGreeter test", () => {
    test("html <h1> test", () => {
        //Arrange
        let htmlGreet = new HtmlGreeter ("'Ello")
        //Assert
        expect(htmlGreet.greet("Nigel")).toBe("<h1>'Ello, Nigel!</h1>")
    });
    test("html <p> test", () => {
        //Arrange
        let htmlGreetTwo = new HtmlGreeter ("Top o' the marnin' to ya", "p")
        //Assert
        expect(htmlGreetTwo.greet("Liam")).toBe("<p>Top o' the marnin' to ya, Liam!</p>")
    });
    test("html <p> test", () => {
        //Arrange
        let htmlGreetThree = new HtmlGreeter ("Top o' the marnin' to ya", "h2")
        //Assert
        expect(htmlGreetThree.greet("Liam")).toBe("<h2>Top o' the marnin' to ya, Liam!</h2>")
    });
});