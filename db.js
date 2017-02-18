const firebase        = require('firebase-admin')
const firebase_config = {
  databaseURL: process.env.FANTAMORTO_DB_URL,
  credential: firebase.credential.cert({
    projectId: process.env.FANTAMORTO_PROJECT_ID,
    clientEmail: process.env.FANTAMORTO_CLIENT_EMAIL,
    privateKey: process.env.FANTAMORTO_PRIVATE_KEY
  })
}
var firebase_app = null
const connection = () => {
  firebase_app = firebase_app || firebase.initializeApp(firebase_config)
  return firebase_app.database()
}

module.exports = { connection: connection }
