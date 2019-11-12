
import express from 'express';
import React from 'react';
import 'babel-polyfill';
import fs from "fs";

import bodyParser from 'body-parser';

import renderer from './src/renderer';


String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(express.static('build/public'));
app.get("*", (req, res) => {

    fs.readFile("./src/index.html", "utf8", function (err, data) {
        const context = {};


     const   html = renderer(data, req.path, context);


        res.send(html);
    });


});


app.listen(PORT, () => {
    console.log(`APP RUNNING ${PORT}`)
});