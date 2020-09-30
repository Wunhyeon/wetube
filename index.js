import express from "express";
//const express = require('express');
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening on : http://localhost:${PORT}`);
}

function handleHome(r1,r2){
    console.log("hi, from home");
    // console.log(r1);
    r2.send("Hello from home")
}


// function handleProfile(rq, rs){
//     rs.send("ZZ")
// }

const handleProfile = (r1,r2) => {
    console.log("handle Profile");
    r2.send("You are one my profile");
}
const betweenHome = (req, res, next) => {
    console.log("Between");
    next();
}

app.use(betweenHome);

app.get("/", handleHome);

app.get("/handleProfile", handleProfile);


app.listen(PORT, handleListening);