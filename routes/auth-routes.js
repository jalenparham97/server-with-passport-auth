const router = require('express').Router()

// Google Login OAuth
router.get('/google', (reg, res) => {
  // handle with passport
  res.send('logging in with google')
})

// Auth Logout
router.get('/logout', (req, res) => {
  // Handle with passport
  res.send('Logging Out')
})

module.exports = router