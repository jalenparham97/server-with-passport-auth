const router = require('express').Router()
const passport = require('passport')

// Google Login OAuth
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

// Callback Handler Google OAuth
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('you reached the callback URI')
})


// Auth Logout
router.get('/logout', passport.authenticate('google'), (req, res) => {
  // Handle with passport
  res.send('Logging Out')
})

module.exports = router