import {Resend} from "resend";

export async function POST (req) {

  const resend = new Resend(process.env.RESEND_KEY);
  try {
    const {email, message} = await req.json();


    const data = await resend.emails.send({
      from: `info@madmansspirit.com`,
      to: 'info@madmansspirit.com',
      subject: `${email}`,
      html: `<p>${message}</p>`
    });
    console.log(data)
    console.log("sent")
    return Response.json(data);
  } catch (e) {
    throw new Error("Error mailer")
  }
}