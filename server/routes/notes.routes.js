const { Router } = require('express');
const router = Router();
const { isAuthenticate } = require('../helpers/auth');
const {notesPage, createPage, createNote, updatePage, updateNote, deleteNote } = require('../controllers/notes.controller');


router.get('/', isAuthenticate,notesPage);

router.get('/add',  isAuthenticate , createPage);
router.post('/add',  isAuthenticate ,createNote );

router.get('/update/:id',  isAuthenticate , updatePage);
router.put('/update/:id',  isAuthenticate , updateNote);


router.delete('/delete/:id',  isAuthenticate , deleteNote);

module.exports = router;

