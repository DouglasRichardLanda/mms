import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import prisma from "@/prisma/prismaconnect";

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');
  const name = searchParams.get('name');

  // ⚠️ The below code is for App Router Route Handlers only
  const blob = await put(`albums/${filename}`, request.body, {
    access: 'public',
  });

  await prisma.Album.create({
    data: {
      name: name,
      albumcover: filename
    }
  })

  // Here's the code for Pages API Routes:
  // const blob = await put(filename, request, {
  //   access: 'public',
  // });


  return NextResponse.json(blob);
}