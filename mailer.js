const nodemailer  = require('nodemailer-promise')

const ADMIN       = 'guido.barbaglia@gmail.com'
// const BASE_URL    = 'https://fantamorto-mailer.herokuapp.com'
const BASE_URL    = 'http://localhost:5000'

const approvedText = () => `
  <h1>F A N T A M O R T O</h1>
  <hr>
  Benvenuto! Il tuo account è stato autorizzato.
  Accedi a <a target="_blank" href="fantamorto-4f1ad.firebaseapp.com">Fantamorto</a> per
  iniziare a giocare!
`

const forApprovalText = (id, name) => `
  <h1>F A N T A M O R T O</h1>
  <hr>
  L'utente ${name} ha richiesto di iscriversi a FANTAMORTO.
  <br><br><br>
  <a target="_blank" href="${BASE_URL}/approve/${id}">
    Approva Richiesta
  </a>
`

const sendEmail = nodemailer.config({
  email: 'fantamorto.online@gmail.com',
  password: 'Fantamorto2017',
  server: 'smtp.gmail.com'
});

const approvedOptions = (to) => {
  return {
    subject: 'Benvenuto a FANTAMORTO!',
    senderName: 'FANTAMORTO',
    receiver: to,
    html: approvedText()
  }
}

const forApprovalOptions = (id, name) => {
  return {
    subject: 'Nuova Richiesta di Iscrizione',
    senderName: 'FANTAMORTO',
    receiver: ADMIN,
    html: forApprovalText(id, name)
  }
}

const sendApproved = (to) => sendEmail(approvedOptions(to))
const sendForApproval = (id, name) => sendEmail(forApprovalOptions(id, name))

module.exports = {
  sendApproved: sendApproved,
  sendForApproval: sendForApproval
}
