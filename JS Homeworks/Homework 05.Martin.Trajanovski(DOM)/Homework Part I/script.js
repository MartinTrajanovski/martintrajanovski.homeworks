let headerOne = document.getElementById("myTitle");
headerOne.innerText = "This used to be a cool page!";
let firstPara = document.getElementById("first").lastElementChild;
firstPara.innerText = "Someone changed my content!"
let secondPara = document.getElementsByClassName("second")[0];
secondPara.innerText = "They did it without my consent!";
let text = document.getElementsByClassName("anotherDiv")[0].lastElementChild;
text.innerText = "I don't understand this!";
let scr = document.getElementsByTagName("body")[0].lastElementChild;
let lastDiv = scr.previousElementSibling;
let secondToLastHeader = lastDiv.firstElementChild;
secondToLastHeader.innerText = "They changed me, as well!";
let lastHeader = secondToLastHeader.nextElementSibling;
lastHeader.innerText = "Me too!";