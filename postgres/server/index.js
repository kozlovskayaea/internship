const express = require('express')
const filmRouter = require('./routes/routes')
const genreRouter = require('./routes/routes')

const PORT = process.env.PORT || 8080

const app = express();

app.use(express.json())
app.use('/api', filmRouter)
app.use('/api', genreRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`));