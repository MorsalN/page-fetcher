const userInput = process.argv.slice(2); //getting rid of the file paths in the beginning 
// console.log('URL: ', userInput[0]); //gets URL ex. http://www.example.edu/
// console.log('Local File Path: ', userInput[1]); //gets local file path ex. ./index.html

const http = require('http'); //HTTP standard library 
const fs = require('fs') //Writing File with node.js

http.get(userInput[0], (resp) => {
  let data = '';

  resp.on('connect', () => {
    console.log('Successfully connected to server');
  });

  //getting data 
  resp.on('data', (data) => {
    console.log('Server says: ' + data);

  //fs
  fs.writeFile(userInput[1], data, 'utf8', err => {
    if (err) {
      console.error(err)
      return
    }
    // let fileSize = fs.statSync(userInput[1]) 
    // console.log(fileSize); //another way of getting size
    console.log('-----------------------------------');
    console.log(`Downloaded and saved ${data.length} bytes to ${userInput[1]}`);
    console.log('-----------------------------------');
    console.log(`File Written in ${userInput[1]}`);
    console.log('-----------------------------------');
    })
  })
});



