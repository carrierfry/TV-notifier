#!/bin/node
const readline = require("readline-sync");

// console.log("Please type the name of the movie or show you would like to add:");

const name = readline.question("Please type the name of the movie or show you would like to add:\n> ");
const movie = readline.keyInYN(`Is ${name} a movie?`);

const nameURL = name.replace(/ /g, "+",);

// &SucheSendergruppen%5B%5D 1 -> Hauptsender
// &SucheSendergruppen%5B%5D 2 -> Regionalsender
// &SucheSendergruppen%5B%5D 3 -> Öffentlich-Rechtliche
// &SucheSendergruppen%5B%5D 4 -> Privat
// &SucheSendergruppen%5B%5D 5 -> Pay-TV
// &SucheSendergruppen%5B%5D 6 -> Doku/News
// &SucheSendergruppen%5B%5D 284 -> Sport
// &SucheSendergruppen%5B%5D 285 -> Kinder
// &SucheSendergruppen%5B%5D 7 -> Ausland


let searchString = `https://www.tvtv.de/suchergebnis?eq=${nameURL}
&sucheAbschicken=suchen
&SucheFelder=titel
&SucheZeitraum=alle
&SucheDatum%5B%5D=alle
&SucheDatum%5B%5D=1
&SucheDatum%5B%5D=2
&SucheDatum%5B%5D=3
&SucheDatum%5B%5D=4
&SucheDatum%5B%5D=5
&SucheDatum%5B%5D=6
&SucheDatum%5B%5D=0
&SucheTageszeiten%5B%5D=alle
&SucheTageszeiten%5B%5D=1
&SucheTageszeiten%5B%5D=2
&SucheTageszeiten%5B%5D=3
&SucheTageszeiten%5B%5D=4
&SucheUhrzeit=alle
&SucheSendergruppen%5B%5D=1
&SucheSendergruppen%5B%5D=2
&SucheSendergruppen%5B%5D=3
&SucheSendergruppen%5B%5D=4
&SucheSendergruppen%5B%5D=5
&SucheSendergruppen%5B%5D=6
&SucheSendergruppen%5B%5D=284
&SucheSendergruppen%5B%5D=285
&SucheSendergruppen%5B%5D=7
&SucheKategorie%5Bfilm%5D%5B%5D=alle`

console.log(searchString);