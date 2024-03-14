import prisma from "@/prisma/prismaconnect"
import {NextResponse} from "next/server";


export async function POST (req) {
  try {

    const {email} = await req.json()

    const res = await prisma.email.create({
      data: {
        email: email
      }
    })
    return NextResponse.json({res}, {status: 201})
  } catch (e) {
    throw new Error("Error subscribe api")
  }
}