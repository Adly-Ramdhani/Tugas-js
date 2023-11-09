const express = require('express')
const router = express.Router()
const {
    getAuthors,
    getAuthor,
    addAuthor,
    updateAuthor,
    deletAuthor
} = require('../controllers/authorController')

//untuk menampilkan data
router.get('/', getAuthors)

//untuk mengirim data  
router.post('/',addAuthor )

// unruk memperbarui/update data
router.get('/:id', getAuthor)

// unruk memperbarui/update data
router.put('/:id', updateAuthor)
 
//untuk menghapus data
router.delete('/:id', deletAuthor)

module.exports = router