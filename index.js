const express     = require('express')
const app         = express()
const path        = require('path');
const mailer      = require(path.resolve(__dirname, './mailer.js'))
const db_client   = require(path.resolve(__dirname, './db.js'))


app.set('port', (process.env.PORT || 5000))

app.get('/request/:id', (req, res) => {
  db_client
    .connection()
    .ref(`users/${req.params.id}`)
    .once('value')
    .then((snapshot) => {
      const user = snapshot.val()

      if (user != null && user.status == 'PENDING') {
        mailer
          .send(user.id, user.name)
          .then(() => res.sendStatus(200))
          .catch((err) => res.send(err))
      } else {
        res.sendStatus(200)
      }
    })
})

app.listen(app.get('port'), () => console.log('Running on port', app.get('port')))
