const noteModel = require('../models/Notes.js')
const express = require('express')
const app = express()

//TODO - Create a new Note
const newNote = new noteModel(req.body)


//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    try{
        // Validate request
        if(!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
        //TODO - Write your code here to save the note
        await newNote.save()
        res.status(200).send(newNote)
    }catch(err){
        res.status(500).send(err)
    }
    
})

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async(req, res) => {
    try{
            // Validate request
        if(!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
        //TODO - Write your code here to returns all note
        const notes = await noteModel.find()
        res.status(200).send(notes)
    }catch(err){
        res.status(500).send(err)
    }
})

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async (req, res) => {
    try{
            // Validate request
        if(!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
        //TODO - Write your code here to return onlt one note using noteid
        const oneNote = await noteModel.findById(req.params.noteId)
        res.status(200).send(oneNote)
    }catch(err){
        res.status(500).send(err)

    }   
})

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async (req, res) => {
    try{
            // Validate request
        if(!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
        //TODO - Write your code here to update the note using noteid
        const updatedNote = await noteModel.findByIdAndUpdate(req.params.noteId,req.body)
        await updatedNote.save()
        res.status(200).send(updatedNote)

    }catch(err){
        res.status(500).send(err)

    }
})

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async(req, res) => {
    try{
            // Validate request
        if(!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
        //TODO - Write your code here to delete the note using noteid
        const deleteNote = await noteModel.findByIdAndDelete(req.params.noteId)
        res.status(200).send(deleteNote)
    }
    catch(err){
        res.status(500).send(err)
    }
})


module.exports = NoteRouter