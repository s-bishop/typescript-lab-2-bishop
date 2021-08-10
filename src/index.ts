import {Greeter} from "./greeter";
import {JavaScriptGreeter} from "./javascriptgreeter";
import PromptSync from "prompt-sync"
//const prompt = require ('prompt-sync')();

let greets = new Greeter("guten Morgen");
console.log(greets.greet("Hanz"));

let jsGreets = new JavaScriptGreeter("guten Morgen");
console.log(jsGreets.greet("Hanz"));

let myPrompt = PromptSync();
let yourName = myPrompt("What is your name?");
// console.log("Oh! Nince to meet you " + yourName);
let yourGreeting =myPrompt("Enter a greeting.");
//Arrange
let example1 = new Greeter(yourGreeting);
console.log(example1.greet(yourName));
