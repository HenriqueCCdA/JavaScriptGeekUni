let a = document.querySelector('.link');

console.log(a.innerText);
console.log(a.parentNode); // body

console.log(a.parentNode.parentNode); // html

console.log(a.parentNode.parentNode.parentNode); // #document

console.log(a.parentNode.parentNode.parentNode.parentNode);


//                  body       html
console.log(a.parentNode.parentNode.childNodes);


console.log(a.parentNode.parentNode.firstChild); // head

console.log(a.parentNode.firstChild.nextSibling);
console.log(a.parentNode.firstChild.nextSibling.nextSibling);

console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling);
