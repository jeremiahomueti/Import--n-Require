//Diff b/w Import and Require

/* 
In the past, people would use the require function to import 
stuff (he said to import functions and codes) from other files.

But now we have IMPORT and EXPORT. You can export code in one 
file, and import it, in another file.
*/

//It also allows you to import certain functions and variables from another file.


import {capitalizeString} from "./string_function"
const cap = capitalizeString("hello!");

console.log(cap);

