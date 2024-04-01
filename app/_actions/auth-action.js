'use server'

import prisma from "@/prisma/prismaconnect";
import jwt from "jsonwebtoken"
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {NextResponse} from "next/server";
export async function loginaction (data) {
  const credentials = Object.fromEntries(data)
  const admin = await prisma.admin.findFirst({
    where: {
      email: credentials.username
    }
  })
  if (!admin) {
    return null
  }
  if(credentials.password !== admin.password) {
    return null
  }
  const expirationTime = new Date(Date.now() + 60 * 60 * 1000);
  const token = await jwt.sign(admin, process.env.JWT_KEY, {expiresIn: "1h"})
  cookies().set('session', token, {
    httpOnly: true,
    expires: expirationTime,
  })
  redirect('/profile')
}

export async function logoutaction () {
  cookies().set('session', '')
  redirect('/')
}