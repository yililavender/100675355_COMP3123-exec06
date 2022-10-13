const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = new mongoose.Schema({
  noteTitle: String,
  noteDescription: String,
  priority: String,
  dateAdded: Data,
  dateUpdated: Data
})

const Notes = mongoose.model("Notes", NoteSchema);
module.exports = Notes;