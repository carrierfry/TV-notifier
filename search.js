#!/bin/node

async function mainFunc() {
    const fs = require('fs');

    const urlsFile = fs.readFileSync("searches.txt", "utf8")
    const urls = urlsFile.split("\n");

    let hits = [];

    for (let i = 0; i < urls.length; i++) {
        let url = urls[i];

        let body = await downloadPage(url);
        body.split("\n").forEach(line => {
            if (line.includes("openDetailPopup")) {
                if (!line.includes("lazyload")) {
                    hits.push(line.split("href=\"")[1].split("\"")[0]);
                }
            }
        });
    }

    hits.forEach(url => {
        let name = url.split("/")[url.split("/").length - 1];
        console.log(`${name}: ${url}`);
    });
}

function downloadPage(url) {
    const request = require('request');

    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error) reject(error);
            if (response.statusCode != 200) {
                reject('Invalid status code <' + response.statusCode + '>');
            }
            resolve(body);
        });
    });
}

mainFunc();