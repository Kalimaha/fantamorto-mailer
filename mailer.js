const nodemailer  = require('nodemailer-promise')

const text = () => `
  <h1>F A N T A M O R T O</h1>
  <hr>
  Benvenuto! Il tuo account è stato autorizzato.
  Accedi a <a target="_blank" href="fantamorto-4f1ad.firebaseapp.com">Fantamorto</a> per
  iniziare a giocare!
`

const sendEmail = nodemailer.config({
  email: 'fantamorto.online@gmail.com',
  password: 'Fantamorto2017',
  server: 'smtp.gmail.com'
});

const options = (to) => {
  return {
    subject: 'Benvenuto a FANTAMORTO!',
    senderName: 'FANTAMORTO',
    receiver: to,
    html: text()
  }
}

const send = (to) => sendEmail(options(to))

module.exports = { send: send }
