// node js allows the js code that is prior limited only to the website and the web browser, now that is taken out of the browser and able to interact with the machine.
// node js allows user to interact directly with the hardware of the computer  // for eg this can be used to build a desktop application
// for web development, node js application is deployed on to the servers, so that it can access local files, that is the db, and can act as an application
// to run a node js file on your computer, just go to the terminal, open the directory in which the node files exixts, then type >> node >> follow by filename including .js extention

// repl (read evaluation print loops)
// this is node console, that can be opened in the terminal with typing node // same as chrome console and then ctrl + c to exit the terminal console

//the below is an example of how we can use node js to access local files
const { defaultMaxListeners } = require("events");
const fs = require("fs");     // fs is  node js library that allows us to access local files
fs.copyFileSync("node_js.js", "index.js");    // this copies text from file 1 to file 2

// https://nodejs.org/docs/latest-v15.x/api/ we tak into this website, to look at various documentations and examples related to node js modules
// this link includes libraries that come default with node js 

// for external libraries we use node package manager npm
// to strt npm use command npm init in terminal
// >> is asks us to enter some defaultMaxListeners, enter those and node js package is created named package.json
// search npm libarary from https://www.npmjs.com/
// to install any new npm package use npm install the name of the libarary 
// npm install superheroes 
// and now use this documentation and use that in your node js file
// eg code for superheroes module // generates names of random super heroes

var superheroes = require("superheroes");
console.log(superheroes.random());