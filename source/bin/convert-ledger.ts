import { read } from "fs";

const fs = require("fs");

function readFile(file = "./ledger.csv", callback: (data: string) => void) {    
    fs.readFile(file, "utf8", (err, data) => {
            if (err) throw err;
            callback(data);
        }
    );
}

function writeFile(data, file = "./ledger.json") {
    fs.writeFile(file, data, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
}

function parseLedger(input: string, callback: (data: string) => void) {
    
    const table  =  input   .split("\n"); 
    const header =  table[0].split("," ); 

                    table   .pop(); 

    const data   =  table   .map(v => 
                                 v .split(","))

    return JSON.stringify({header, data});
}

export function convertLedger(file = "./ledger.csv") {
    readFile(file, (data) => {
        parseLedger(data, (data) => {
            writeFile(data);
        });
    });
}