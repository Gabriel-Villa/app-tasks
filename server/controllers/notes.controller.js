const notesController = {}
const Note = require('../models/Note');

notesController.notesPage = async (req,res) => {
    const notes = await Note.find();
    res.render('notes/notes', {notes});
}


notesController.createPage = (req,res) => {
    res.render('notes/create');
}

notesController.createNote = async (req,res) => {
    const { title, description, priority} = req.body;
    const newNote = await new Note({title,description, priority});
    await newNote.save();
    req.flash('success', 'Note added successfully');
    res.redirect('/notes');
}

notesController.updatePage = async (req,res) => {
    const id = req.params.id;
    const note = await Note.findById(id);
    res.render('notes/update', {note});
}

notesController.updateNote = async (req,res) => {
    const id = req.params.id;
    const { title, description, priority} = req.body;
    const noteUpdate = await Note.findByIdAndUpdate(id,{title:title,description:description,priority:priority});
    await noteUpdate.save();
    req.flash('success', 'Note updated successfully');
    res.redirect('/notes');
}

notesController.deleteNote = async (req,res) => {
    const id = req.params.id;
    await Note.findByIdAndDelete(id);
    req.flash('success', 'Note deleted successfully');
    res.redirect('/notes');
}






module.exports = notesController;