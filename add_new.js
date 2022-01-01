#!/bin/node
const readline = require("readline-sync");

// console.log("Please type the name of the movie or show you would like to add:");

const name = readline.question("Please type the name of the movie or show you would like to add:\n> ")
console.log(name);