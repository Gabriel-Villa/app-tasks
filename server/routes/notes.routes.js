const { Router } = require("express");
const router = Router();
const { isAuthenticate } = require("../helpers/auth");
const {
  notesPage,
  createPage,
  createNote,
  updatePage,
  updateNote,
  finishNote,
  historyPage,
  reactivateNote,
  deleteNote,
} = require("../controllers/notes.controller");

router.get("/", isAuthenticate, notesPage);

router.get("/add", isAuthenticate, createPage);
router.post("/add", isAuthenticate, createNote);

router.get("/update/:id", isAuthenticate, updatePage);
router.put("/update/:id", isAuthenticate, updateNote);

router.put("/completed/:id", isAuthenticate, finishNote);

router.get("/history", isAuthenticate, historyPage);

router.put("/reactivate/:id", isAuthenticate, reactivateNote);

router.delete("/delete/:id", isAuthenticate, deleteNote);

module.exports = router;
