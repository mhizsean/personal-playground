// const fetch = require('node-fetch');
// const fs = require('fs');

import { error } from 'console';
import fs from 'fs';

// **********Callbacks****************


// setTimeout
// setTimeout(() => 
//     alert('waited 2sec'),
// 2000)

// nested setTimeout
setTimeout(() => {
    console.log('3');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('1')
        }, 1000);
    }, 1000);
}, 1000);

// button event handler in briswer
// const btn;
// btn.addEventListner(çlick, () => {
// })

// error first callback
// fs.readFile('./file.txt', {encoding: 'utf-8'}, (err, data) => {
//     console.log(data)
// })
fs.readFile('./file.txt', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
        console.error('Error');
        console.error(err);
    } else {
        console.error('GOT Data')
        console.log(data)
    }
})


