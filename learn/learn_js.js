// js is an intrepreted programming langugae, code is executed line by line
alert("dinesh reddy"); // popup alert
prompt("what is your name?") // take input from user
typeof(123) // var type number
typeof("dinesh") // var type string
typeof(true) // var type boolean
var myName = "dinesh Reddy"; // defying variable
myName.length; // lenghth of string
myName.slice(0,1); //slice a string first number is valid second number is not used it implies range
myName.toLowerCase(); //to lower case
myName.toUpperCase(); // to upper case
// in java script variable name starts with small letter and then for every new word captial letter is the indicative
function myFunction() {
    // write you code here // basic syntax of function // defyining the function
}
myFunction(); // this is how function is called
var output = myFunction();//we can use return inside the function to give an output and save it in an variable
console.log(myName); // this shows the value of myName variable in console
var floatvalue = 10.23564
var intvalue = Math.floor( floatvalue ); // 10
var intvalue = Math.ceil( floatvalue ); // 11
var intvalue = Math.round( floatvalue ); // basic math rounding style
var intvalue = Math.trunc( floatvalue ); // it gives the integer value of the decimal number and eliminates the decimal part
Math.pow(base, power) // to calculate power
Math.random(); // generates random 16 digit decimal value from 0 to 1 but 1 not inclusive
// if we want to have a random of range (1,6) or (1, 100) or any range starting from 1 multiply the random number generated with the max value in range 
// Math.random();* (6 or 100 as you wish to do so)
// if esle conditions 
if (/* condition  eg is given*/ a === 1){
    // write some code if if is true
}
else {
    // write some code if if is false
}
// in js there is a difference between == and === 
// when using == is only checks the var (eg 1 == "1" returns true) where as (1 === "1" return false)
// == checks only the value, where as === checks value and data type of the value as well
var array = ["dinesh", "reddy", "reddem"] // define array
array.includes("dinesh") // returns true or false
array.push("satyam") // satyam string is added to the array 
array.pop(); // it removes the last element in array
array,slice(/* enter the index of the array to rturn that specific elemment */);
// while loops
while (/* condition  eg is given*/ a === 1){
    // code will execute until the above condition is false
}
//for loops
for (Start ; end ; change){ // eg for ( i=0; i<5; i++){
    // code for for loop        console.log(i)
}                             // }
parseInt(variable); // converts varibale to integer
parseFloat(variable); // converts variable to float 
String(number); // converts number to string


// integration of js with html
/* different methods of integration js into html
1. inline js

            eg: <body onload="alert('hello dinesh');">

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>website</title>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body onload="alert('hello dinesh');">  here is the js code
                <h1>hello</h1>
            </body>
            </html>
        it is not a very good practise of using inline js, it is difficult to debug

2. internal js

            eg: <script type="text/javascript">
                alert("hi i am dinesh");
                </script>

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <h1>hello</h1>
                <script type="text/javascript">
                    alert("hi i am dinesh");       here is the js code
                </script>
            </body>
            </html>

3. external js

            eg: <script src="index.js"></script>  we add js file in the repo and indicate that in scr 

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <h1>hello</h1>
                <script src="index.js"></script>    here is the js code file
            </body>
            </html>
*/

document.querySelector("h1").innerHTML = "bye dinesh";  // document is html file, queryselector selects the tag, innerhtml is the value inside the h1 tag, at last we are changing it

// Document Object Model (dom)
/*
the entire html file in converted to dom by default in the brwser, each of the tag is split, for eg: html has 2 childs >> head and body, again each of head and body has children
with the help of dom we can access individual species of child and parent with dom

        eg: html code html code has multiple elements and tags inside it they are all random so to indicate multiple childs and parents for dom 

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Website</title>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <h1 id="title">Hello </h1>
                <a href="https://www.google.com">Google</a>
                <input type="checkbox">
                <button class="btn">CLick me</button>
                <ul id = "table">
                    <li class="item">
                        <a href="https://www.google.com">Google</a>
                    </li>
                    <li class="item">blank1</li>
                    <li class="item">blank2</li>
                </ul>
                <script src="index.js"></script>
            </body>
            </html>

        below will be a understading of js using the above html file
*/

document; // it returns the entire html file for which js file is used
document.firstElementChild; // it returns all the contents inside the html tag because document is the entire html and its first and only child is html tag
document.firstElementChild.firstElementChild; // it returns all the contents inside head tag because, document is html file, first child is html and again first child for html tag is head tag 
document.firstElementChild.lastElementChild; // it returns all the contents inside body tag because, document is html file, first child is html and last child for html tag is body tag 
// this can go as many levels as we can, this can keep on continue
// once we get into the element that we need, we can manipulate it by changing it as we needed for example
var h1Tag = document.firstElementChild.lastElementChild.firstElementChild; // this will return h1 tag with value hello from above code, the moment goes as html file>> html tag >> body tag >> h1 tag
// now we have our h1 tag stores in variable h1Tag we can use js to edit and manipulate the value inside the tag fro example
h1Tag.innerHTML = "Bye Bye Dinesh"; // h1 tag vale is now changed
// we can not only change values but also can do many other such as
h1Tag.style.color = "red"; // this changes colour of h1 tag to red // check spelling of color it is color only and not colour
document.querySelector("input").click(); // this searches for a query named input from the entire html document and then perform operation click on that, thish automatically checks the tick box

// different methods of selecting elements inside the dom
document.getElementsByTagName("li"); // returns all elements with tag name li in an array
document.getElementsByTagName("li")[0]; // we can find any individual element in the array formed by mentioning the count in array
document.getElementsByClassName("btn"); // retunrs all elements with class name btn in an array
document.getElementsByClassName("btn")[0]; // we can find any individual element in the array formed by mentioning the count in array
// we can add .style.colour to the elements above and change colours as well
document.getElementById("table"); // returns all ements in ul because its id is table
// we can configure the above with as we like and perform a query and we can even update a element using .innerHTML
// we can use query selector to find elements by class, id , tag and element
// for element or tag use directly the name
document.querySelector("h1")  // if there are multiple then it returns the first one
// for id use with # before the id name
document.querySelector("#title");
// for class use . before the class name
document.querySelector(".btn");
// in the above all examples of querySelector >> id, class, tag, elements are called selectors
// if we want to include multiple selectors of different kinds in a single query then seperate them with space
document.querySelector("li a"); // this will return the google link inside the li tag 
document.querySelector("#table .item a") // this will go as find element with id "table", then find element with class "item", then find element with tag name "a"
// when we are using the query selector method if there are multiple elements that satisfy the querySelector method, then use querySelectorAll
document.querySelectorAll("#table .item") // this returns an array of elements with class name "item" inside the element with id "table"
// and to find out individual elements with querySelectorAll menthod indicate the array position and update or manipulate the element
document.querySelectorAll("#table .item")[2].innerHTML = "2nd blank" // this changes "blank 2" to "2nd blank"
// for styling with js refer to https://www.w3schools.com/jsref/dom_obj_style.asp 
document.querySelector("button").classList; // this will return the class that is attached to element button
document.querySelector("button").classList.add("visibility"); // add another class to the element button
document.querySelector("button").classList.remove("visibility"); // remove class "visibility" from button element
document.querySelector("button").classList.toggle("visibility"); // if class "visilibility" present remove, if not then add
// by adding class in js we can keep our styles in css files and use them to add behaviour in our website
// for example, we create a style for class name "behaviour" in css file and when we add a class using classList, along with the class we add behaviour to it as well
// as we already included style for that class in our css file
<h1><em>Hello Dinesh</em></h1>
document.querySelector("h1").innerHTML; // refer to above example >> this returns the value inside h1 tag that is <em>Hello Dinesh</em>
// the vale is returned with the emphasis tag as well 
// if we have multiple tags and want the text only to be shown we use .textContent
document.querySelector("h1").textContent; // refer to above example >> this returns only the text inside "Hello Dinesh"
// by using this functionality we can add behaviour to our text witin the go using js
document.querySelector("h1").innerHTML = "<em>Hello Dinesh</em>" // this was emphasis tag is added to the element and text is changed along with style
// we can get attributes that are present in an element
document.querySelector("a").attributes; // this gives me the attributes that are present in a tag returns href
document.querySelector("a").getAttribute("href"); // gives the value inside the attribute href "https://www.google.com"
document.querySelector("a").setAttribute("href", "https://www.gmail.com"); // this edit the attribute from google to gmail
// event listner this helps to find button clicks and other
document.querySelector("button").addEventListener(event, js_function) // here event is what to listen for (https://www.w3schools.com/jsref/dom_obj_event.asp) this link has the type of events that can be listned to 
// js_function above is what to do when event is hit, it is basically a js function
// event should always be passed in a string , js_function shouldskip params because adding () will directly call the function without the event listner getting activated, that is why we skip that
// we dont even create a new function and call that directly we write the function in the event listener only withour any function name
document.querySelector("button").addEventListener("event", function () {
    alert("i got clicked");
})                                                    // this is the best practise of writing event listner we can follow the aboce method also 
debugger;// if you are stuck and dont know what is happeninng to get the flow of the script use debugger; in console
this // this is a inbuilt function of js which enable the current object, class or anything that is being used
var student = {id: 1, name: "dinesh", class: 12, roll_no: 12345, address: "Hyderabad"}// ruby has hash and same as in js , hash are called objects in js
// constructor functions are used to create objects in js or has in ruby
// constructor functions writing is shown below
function CreateObject (id, name, roll_no, address){                  // if we are using such functions to construct objects , such functions are called constructor functions
    this.id = id;                                                  // they dont use camelcase, every starting letter is capital
    this.name = name;                                                            // this is how we create a generalised function to create objects
    this.roll_no = roll_no;
    this.address = address;
}

var studentDinesh = new CreateObject(1,"dinesh", 124, "Hyderabad")    // this is how ne object is created
// we can use constructor functions even to have a function inside them
//eg
function BellBoy (name, age, expert, clean){
    this.name = name;
    this.age = age;
    this.expert = expert;
    this.clean = function () {                                        // function need not be given any name because it is called by default using object key clean
        alert("cleaning in progress....");
    }
}

// switch in js // switches are basically long if else if and else loops instead of writing long if else statements we write switch conditions
// syntax
switch ("value to compare"){                   // we are presented with a value to compare
    case "value to compare":                   // if value is equal to something that is in case after string then code will execute                                     
        // write code;                          // this will run because both value are same
        break;
    case "value not matched with above":    // this value is not present in above variable this will skip
        // write code;                      //  this wont run because values are different, it is skipped
        break;

    default: console.log();                   // else statement
}
// we can view the event that trigerred a function using event
// eg: // callback functions
document.addEventListener(function (event){
    console.log(event);                           //  this way we can find which event has triggered the function, sunch functions are called callback functions
})