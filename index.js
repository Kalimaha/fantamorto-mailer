const express     = require('express')
const app         = express()
const path        = require('path');
const mailer      = require(path.resolve(__dirname, './mailer.js'))
const db_client   = require(path.resolve(__dirname, './db.js'))

app.set('port', (process.env.PORT || 5000));

app.get('/request/:id', (req, res) => {
  db_client.connection().ref(`users/${req.params.id}`).on('value', (snapshot) => {
    const user = snapshot.val()

    if (user != null && user.status == 'PENDING') {
      mailer.sendForApproval(user.id, user.name)
        .then(() => res.sendStatus(200))
        .catch((err) => res.send(err))
    } else {
      res.sendStatus(200)
    }
  })
})

app.get('/approve/:id', (req, res) => {
  db_client.connection().ref(`users/${req.params.id}`).on('value', (snapshot) => {
    const user = snapshot.val()
    user.status = 'APPROVED'
    db_client.connection().ref(`users/${req.params.id}`).update(user).then(() => {
      mailer.sendApproved(user.email)
        .then(() => res.sendStatus(200))
        .catch((err) => res.send(err))
    })
  })
})

app.listen(app.get('port'), () => {
  console.log('Express running on port', app.get('port'));
});
