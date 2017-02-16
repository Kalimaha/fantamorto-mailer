const express     = require('express')
const app         = express()
const nodemailer  = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'fantamorto.online@gmail.com',
    pass: 'Fantamorto2017'
  }
})
const from = 'fantamorto.online@gmail.com'
const to = 'guido.barbaglia@gmail.com'


app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  // res.send('Hello World!')
  const text = '<h1>Hello world from</h1>';
  const mailOptions = {
    from: from,
    to: to,
    subject: 'Email Example',
    html: text
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error)  { res.send(error) }
    else        { res.send('Message sent.') }
  })
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
