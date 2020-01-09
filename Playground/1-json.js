const fs = require('fs')
// const book = {
//     title: "APG Abdul Kalam Aazad",
//     author:"aman gupta"
// }

// const booljson = JSON.stringify(book)
// console.log(booljson)
// const boolparse = JSON.parse(booljson)
// console.log(boolparse)
// fs.writeFileSync('1-json.json',booljson)
const databuffer = fs.readFileSync('1-json.json')
const dataJSON = databuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)


