const express = require('express')
const router = express.Router()
const {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deletBook
} = require('../controllers/BookController')

//untuk menampilkan data
router.get('/',getBooks)

//untuk mengirim data 
router.post('/', addBook)

router.get('/:id', getBook)

// unruk memperbarui/update data
router.put('/:id', updateBook )

//untuk menghapus data
router.delete('/:id', deletBook )

module.exports = router