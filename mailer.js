const nodemailer      = require('nodemailer-promise')
const ADMIN           = process.env.FANTAMORTO_ADMIN_EMAIL
const FANTAMORTO_URL  = process.env.FANTAMORTO_URL

const text = (id, name) => `
  <h1>F A N T A M O R T O</h1>
  <hr>
  L'utente ${name} ha richiesto di iscriversi a FANTAMORTO.
  <br><br><br>
  <a target="_blank" href="${FANTAMORTO_URL}/approve/${id}">
    Gestisci Richiesta
  </a>
`

const sendEmail = nodemailer.config({
  server:   'smtp.gmail.com',
  email:    process.env.FANTAMORTO_EMAIL,
  password: process.env.FANTAMORTO_EMAIL_PASSWORD,
});

const options = (id, name) => {
  return {
    receiver:   ADMIN,
    html:       text(id, name),
    subject:    `Richiesta di Iscrizione per ${name}`,
    senderName: 'FANTAMORTO'
  }
}

const send = (id, name) => sendEmail(options(id, name))

module.exports = {
  send: send
}
