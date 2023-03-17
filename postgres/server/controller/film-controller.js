const db = require('../data-base')

class filmController {
    
    async createFilm(req, res) {
        const {name, year} = req.body
        const newFilm = await db.query('INSERT INTO films (filmName, filmYear) values ($1, $2) RETURNING *', [name, year])
        res.json(newFilm.rows[0])
    }
    async readAllFilms(req, res) {
        const films = await db.query('SELECT filmName FROM films')
        res.json(films.rows)
    }

    async readFilm(req, res) {
        const id = req.params.id
        const film = await db.query('SELECT * FROM films WHERE filmId = $1', [id])
        res.json(film.rows[0])
        
    }

    async updateFilm(req, res) {
        const {filmId, filmName, filmYear} = req.body
        const film = await db.query('UPDATE films set filmName = $1, filmYear = $2 WHERE filmId = $3 RETURNING *', [filmName, filmYear, filmId])
        res.json(film.rows[0])
    }

    async deleteFilm(req, res) {
        const id = req.params.id
        const film = await db.query('DELETE FROM films WHERE filmId = $1', [id])
        res.json(film.rows[0])
    }
}


module.exports = new filmController()
exports