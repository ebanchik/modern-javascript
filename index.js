console.log("Hello World");

var moment = require('moment');

var datetime = moment().startOf("day").fromNow();
var birthTime = moment("20231225").fromNow();

console.log(datetime);
console.log(birthTime + " Days it will be Christmas");

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);