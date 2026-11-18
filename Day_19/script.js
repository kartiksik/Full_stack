// let i = 0
// var j = 0
// window.console.log("hi")
// window.alert("kese ho ji")
// console.warn("kya haal hai")
// console.log(window)

console.dir(window.document)

const title = document.getElementById("title");
title.style.color = "blue";
title.style.backgroundColor = "lightyellow";
function color(){
    let body = document.getElementById("shlok")
    let selectval = document.getElementById("select")
    
    body.style.backgroundColor = selectval.value
    
}