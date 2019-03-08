const express = require('express')
const cors = require('cors')
const app = express()
// Routes
const auth = require('./routes/auth-routes')

// Route Setup
app.use('/auth', auth)

// Middleware
app.use(cors({
  origin: 'http://localhost:8080'
}))

const PORT = 5000
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))