function parser (json){
let arr = JSON.parse(json);
let outputArr = ["<table>"];
outputArr.push(makeKeyRow(arr));
// arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
//outputArr.push("</table>");


function makeKeyRow(arr){



}

function makeValueRow(obj){

}

function escapeHtml(value){

}

console.log(outputArr.join('\n'));

}


parser(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
);