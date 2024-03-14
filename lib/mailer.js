import nodemailer from "nodemailer"

const htmlMessage = `
    <h1>Send Mailer test</h1>
    <p>Message from test</p>
  `

export default function sendMail () {
  nodemailer.createTransport({

  })
}