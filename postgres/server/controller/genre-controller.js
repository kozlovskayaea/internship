const db = require('../data-base')

class genreController {

    async createGenre(req, res) {
        const {genreName} = req.body
        const newGenre = await db.query('INSERT INTO genres (genreName) values ($1) RETURNING *', [genreName])
        res.json(newGenre.rows[0])
    }

    async readAllGenres(req, res) {
        const genres = await db.query('SELECT genreName FROM genres')
        res.json(genres.rows)
    }

    async readGenre(req, res) {
        const id = req.params.id
        const genre = await db.query('SELECT * FROM genres WHERE genreId = $1', [id])
        res.json(genre.rows[0]) 
    }

    async updateGenre(req, res) {
        const {genreId, genreName} = req.body
        const genre = await db.query('UPDATE genres set genreName = $1 WHERE genreId = $2 RETURNING *', [genreName, genreId])
        res.json(genre.rows[0])
    }

    async deleteGenre(req, res) {
        const id = req.params.id
        const genre = await db.query('DELETE FROM genres WHERE genreId = $1', [id])
        res.json(genre.rows[0])
    }
}

module.exports = new genreController()
exports