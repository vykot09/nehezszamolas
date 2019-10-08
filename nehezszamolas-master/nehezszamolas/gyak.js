"use strict";

let kiir = "";
let feltolt = "";
let elsoSzam = "";
let masodikSzam = "";
let muvelet = "";
let tomb = [];

function egy(){
    feltolt += 1;
    document.getElementById("ablak").value = +feltolt;
}
function ketto(){
    feltolt += 2;
    document.getElementById("ablak").value = +feltolt;
}
function harom(){
    feltolt += 3;
    document.getElementById("ablak").value = +feltolt;
}
function negy(){
    feltolt += 4;
    document.getElementById("ablak").value = +feltolt;
}
function ot(){
    feltolt += 5;
    document.getElementById("ablak").value = +feltolt;
}
function hat(){
    feltolt += 6;
    document.getElementById("ablak").value = +feltolt;
}
function het(){
    feltolt += 7;
    document.getElementById("ablak").value = +feltolt;
}
function nyolc(){
    feltolt += 8;
    document.getElementById("ablak").value = +feltolt;
}
function kilenc(){
    feltolt += 9;
    document.getElementById("ablak").value = +feltolt;
}
function nulla(){
    if(feltolt.lenght != 0){
    feltolt += 0;
    document.getElementById("ablak").value = +feltolt;
    }
}

function osszead(){
    elsoSzam = +feltolt;
    feltolt = "";
    muvelet = "osszeadas";
    document.getElementById("ablak").value = "";

}
function kivon(){
    elsoSzam = +feltolt;
    feltolt = "";
    muvelet = "kivonas";
    document.getElementById("ablak").value = ";"
}
function oszt(){
    elsoSzam = +feltolt;
    feltolt = "";
    muvelet = "osztas";
    document.getElementById("ablak").value = ";"
}
function szoroz(){
    elsoSzam = +feltolt;
    feltolt = "";
    muvelet = "szorzas";
    document.getElementById("ablak").value = ";"
}

function visszaTorol(){
    if (feltolt.length != 0){
        feltolt = feltolt.slice(0, feltolt.length - 1);
        document.getElementById("ablak").value = feltolt;

    }
}

function utolso(){
    feltolt = "";
    document.getElementById("ablak").value = feltolt;

}

function torol(){
    feltolt = "";
    elsoSzam = "";
    document.getElementById("ablak").value = feltolt;
}

function memoryPlus(){
    tomb.push(feltolt);
    feltolt = "";
    document.getElementById("ablak").value = feltolt; 
}
function memoryRead(){
    let osszeg = 0;
    for(let i = 0, i < tomb.length; i++){
        osszeg += +tomb[];
    }
    document.getElementById("ablak").value = feltolt;
}

function egyenlo(){
    masodikSzam = +feltolt;
    switch (muvelet) {
        case "osszeadas":
            document.getElementById("ablak").value = +elsoSzam + masodikSzam;
            break;
        case "kivonas":
            document.getElementById("ablak").value = +elsoSzam - masodikSzam;
            break;
        case "szorzas":
            document.getElementById("ablak").value = +elsoSzam * masodikSzam;
            break;
        case "osztas":
            document.getElementById("ablak").value = +elsoSzam / masodikSzam;        
                 
        default:
            break;
    }
}

