const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const config = require('../config/config')

passport.use(new GoogleStrategy({
  // Options for google strategy
  callbackURL:'/auth/google/redirect',
  clientID: config.google.clientID,
  clientSecret: config.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
  // passport callback function
  console.log('passport callback function fired')
  console.log(profile)
}))