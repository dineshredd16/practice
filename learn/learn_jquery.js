// jquery is a java script library , that helps to reduce the number of line fo code
// it helps in writing code for the same functionality in very less number of lines

// add jquery to your web page by adding this script file before the local js script file
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> // this line is written above the local js file, it is mandatory if not, it wont work

// if we use or script tags in the head section of html file then 
$(document).ready(function () {
    // write the entire code here so that, the code is executed once the jquery library is loaded   // but this is not a good practise
    // always include the script tags and the end of body in html file
    $("h1").css("color", "red");
})

$("h1").css("color", "red") //  this short code does the whole operation of 
document.querySelector("h1").style.color = "red"; // this whole code is written above as short form using jquery

// $ sign denotes the usage of jquery'

// there is process called minification in js,css and many more
// this is done to remove comments, spaces, and blank lines, so that code is reduced in size, which further helps in faster load time of our websites
// there is no point in having the user to load large chunks of file, with spaces, comments and many more, instead just load the functionality, that would be quicker faster
// code is written , 2 versions of it are stored in servers, one is the editor one, to understand to everyone, and the minified version that is used by the user and actually deployed on our website

// selecting elements, thers is no difference in selecting one element and selecting all elements, jquery selects all elements only
document.querySelector("h1") || document.querySelectorAll("h1") // they are different in js
$("hi") // the both above operations are performed in same as here , jquery always slects all elements that are specified

// we can animate using jquery and use all that js does with simple code