const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    return "Your notes..."
}
const searchNote = (title)=>{
    const notes = loadNotes()
    return notes.find((note)=>note.title === title)
}
const listofnodes=()=>{
    console.log(chalk.inverse("Your Notes"))
    const notes = loadNotes()
    notes.forEach((note)=>{
        console.log(note.title)
    })
}
const removenote = (title, body)=>{
const notes = loadNotes()
const remainingnote = notes.filter((note)=>note.title!== title)
if(remainingnote.length < notes.length)
{
    savenotes(remainingnote)
    console.log(chalk.green("Note Deleted!!"))
}
else{
    console.log(chalk.red("Oops note is present"))
}
}
const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicatenotes = notes.filter((note)=>note.title === title)
    const duplicatenote = notes.find((note)=>note.title === title)
    if(!duplicatenote)
    {
        notes.push({
            title:title,
            body:body
        })
        console.log("note has been added")
    }
    else{
        console.log("title has been taken")
    }
    savenotes(notes)
}
const savenotes = (notes)=>{
    const notesjson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesjson)
}
const loadNotes = ()=>{
    try{

        const dataBuffer = fs.readFileSync('notes.json')
        const datajson = dataBuffer.toString()
        return  JSON.parse(datajson)
    } catch(e)
    {
        console.log(e)
        return []
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removenote: removenote,
    listofnodes: listofnodes,
    searchNote: searchNote
}