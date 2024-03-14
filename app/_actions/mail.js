"use server"

export default async function mailer (data) {

  const {email, message} = data
  const res = await fetch('http://localhost:3000/api/mailer', {
    method: 'POST',
    body: JSON.stringify({email, message})
  })
}