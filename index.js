const express     = require('express')
const app         = express()
const path        = require('path');
const mailer      = require(path.resolve(__dirname, './mailer.js'))

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
  mailer.send('guido.barbaglia@gmail.com')
    .then(() => res.sendStatus(200))
    .catch((err) => res.send(err))
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
