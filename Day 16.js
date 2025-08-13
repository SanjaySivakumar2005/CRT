document.querySelector("p").innerHTML = "This is a mod paragraph";
document.getElementById("para").innerHTML = "This is a mod1";
document.getElementByClassName("p1")[0].innerHTML = "This is a class mod1";
document.getElementByClassName("p1")[1].innerHTML = "This is a class mod2";
document.getElementsByTagName("p")[4].innerHTML = "This is a tag mod";

document.querySelector('p');
para.textContent = 'Hello, World!';

let new1=document.createElement('p');
new1.innerHTML = 'This is a new paragraph.';
console.log(new1);
document.body.appendChild(new1);
document.body.removeChild(new1);

document.body.appendChild(new1);

let first = document.getElementsByTagName('p')[0].firstChild 
document.getElementsByTagName('p')[0].removeChild(first);

document.getElementsByTagName

document.querySlector