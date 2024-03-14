"use server"

export default async function subscribe (data) {

  const {email} = data
  const res = await fetch('https://www.madmansspirit.com/api/subscribe', {
    method: 'POST',
    body: JSON.stringify({email})
  })
}