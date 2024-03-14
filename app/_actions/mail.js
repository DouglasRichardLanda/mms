"use server"

export default async function mailer (data) {

  const {email, message} = data
  const res = await fetch('https://www.madmansspirit.com/api/mailer', {
    method: 'POST',
    body: JSON.stringify({email, message})
  })
}