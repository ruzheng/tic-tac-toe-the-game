const store = require('../store.js')

// code here
const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully</p>')

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')

  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>Welcome,</p>' +
  '<p> click Create Game to start playing!</p>')

  // reset all form
  $('form').trigger('reset')
  const onGameButton = `
  <button id="create-game-button">Create Game</button>
  <button id="new-game-button" type="reset">Restart Game</button>
  `
  $('#create-new-game').html(onGameButton)

  // store data from the response in my store object
  store.user = response.user
  console.log(store.user._id)
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Password or email is incorrect</p>')
  $('form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>Goodbye!</p>')

  $('form').trigger('reset')
  $('#create-new-game').html('')
  $('#game-result').html('')
}

const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}

const createGameSuccess = function (response) {
  $('#auth-display').html('<p>Game Created!</p>')
  console.log('You create game')
  store.game = response.game
}

const createGameFailure = function () {
  console.log('Fail to create game')
}

const onUpdateGameSuccess = function (response) {
  console.log('Game Updated')
  store.game.cells = response.game.cells
  console.log(store.game)
}

const onUpdateGameFailure = function () {
  console.log('update fail')
  $('#game-result').html('<p>Update Fail</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  createGameSuccess,
  createGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
