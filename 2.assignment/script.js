function getInfo(){

let str = prompt("Enter Your FullName");
let str1 = str.split(" ").join("");
let str2 = str1.length
let str3 = str.slice(0,1)+str.split(" ").pop() ;
let str4 = (str3 + str2).toLowerCase();
let str5 = `@${str4}`
const name = document.querySelector('#Html').innerHTML = str5
}

