const express = require('express');
const { addBook, editBook, removeBook, getBooks } = require('../controllers/bookController')
const router = express.Router();

router.get('/', getBooks)
router.post('/add', addBook)
router.put('/edit/:id', editBook)
router.delete('/remove/:id', removeBook)

module.exports = router;