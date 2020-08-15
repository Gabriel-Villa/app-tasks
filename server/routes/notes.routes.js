const { Router } = require('express');
const router = Router();
const {notesPage, createPage, createNote, updatePage, updateNote, deleteNote } = require('../controllers/notes.controller');


router.get('/', notesPage);

router.get('/add', createPage);
router.post('/add', createNote);

router.get('/update/:id', updatePage);
router.put('/update/:id', updateNote);


router.delete('/delete/:id', deleteNote);

module.exports = router;

