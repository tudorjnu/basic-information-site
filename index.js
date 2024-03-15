import Person from "./person.js";
import path from "path";

const person = new Person("John Doe", 30);
person.greet();
console.log(path.basename(__filename));
