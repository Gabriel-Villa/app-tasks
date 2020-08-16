const notesController = {};
const Note = require("../models/Note");

notesController.notesPage = async (req, res) => {
  const notes = await Note.find({ user: req.user.id, status: true });
  res.render("notes/notes", { notes });
};

notesController.createPage = (req, res) => {
  res.render("notes/create");
};

notesController.createNote = async (req, res) => {
  const { title, description, priority } = req.body;
  const newNote = await new Note({ title, description, priority });
  newNote.user = req.user.id;
  newNote.status = true;
  await newNote.save();
  req.flash("success", "Note added successfully");
  res.redirect("/notes");
};

notesController.updatePage = async (req, res) => {
  const id = req.params.id;
  const note = await Note.findById(id);
  if (note.user != req.user.id) {
    res.redirect("/notes");
  }
  res.render("notes/update", { note });
};

notesController.updateNote = async (req, res) => {
  const id = req.params.id;
  const { title, description, priority } = req.body;
  const noteUpdate = await Note.findByIdAndUpdate(id, {
    title: title,
    description: description,
    priority: priority,
  });
  await noteUpdate.save();
  req.flash("success", "Note updated successfully");
  res.redirect("/notes");
};

notesController.finishNote = async (req, res) => {
  const id = req.params.id;
  const noteFinish = await Note.findByIdAndUpdate(id, { status: false });
  await noteFinish.save();
  req.flash("success", "Note finished successfully");
  res.redirect("/notes");
};

notesController.historyPage = async (req, res) => {
  const notes = await Note.find({ user: req.user.id, status: false });
  res.render("notes/history", { notes });
};

notesController.reactivateNote = async (req, res) => {
  const id = req.params.id;
  const noteFinish = await Note.findByIdAndUpdate(id, { status: true });
  await noteFinish.save();
  req.flash("success", "Note activated successfully");
  res.redirect("/notes");
};

notesController.deleteNote = async (req, res) => {
  const id = req.params.id;
  await Note.findByIdAndDelete(id);
  req.flash("success", "Note deleted successfully");
  res.redirect("/notes/history");
};

module.exports = notesController;
