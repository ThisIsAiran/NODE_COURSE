const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
const command = process.argv[3]
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption : true,
            type: "string"
        },
        body:{
            describe:"My body is awesome" ,
            demandOption : true ,
            type: "string"
        }
    },
    handler: (argv)=>{
            notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'Removing a node',
    builder:{
        title:{
            describe:"Note title",
            demandOption: true ,
            type: "string"
        },
        body:{
            describe:"small content",
            demandOption: true,
            type:"string"
        }
    },
    handler: (argv)=>{
        notes.removenote(argv.title,argv.body)
    }
})
yargs.command({
    command:'list',
    describe:'lists the node',
    handler: (argv)=>{
        notes.listofnodes()
    }
})
yargs.command({
    command:'read',
    describe:'read the node',
    title:{
        describe:"Note title",
        demandOption: true ,
        type: "string" 
    },
    handler:function(argv){
        if(notes.searchNote(argv.title))
        console.log(notes.searchNote(argv.title))
        else
        console.log(chalk.red("ERROR"))
    }
})
 yargs.parse()

