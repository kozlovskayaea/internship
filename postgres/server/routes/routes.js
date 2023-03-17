const Router = require('express')
const router = new Router()
const filmController = require('../controller/film-controller')
const genreController = require('../controller/genre-controller')

router.post('/film', filmController.createFilm)
router.get('/film', filmController.readAllFilms)
router.get('/film/:id', filmController.readFilm)
router.put('/film', filmController.updateFilm)
router.delete('/film/:id', filmController.deleteFilm)

router.post('/genre', genreController.createGenre)
router.get('/genre', genreController.readAllGenres)
router.get('/genre/:id', genreController.readGenre)
router.put('/genre', genreController.updateGenre)
router.delete('/genre/:id', genreController.deleteGenre)



module.exports = router