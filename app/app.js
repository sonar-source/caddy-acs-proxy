const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

app.post('/*', (req, res) => res.json(req.body))

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))