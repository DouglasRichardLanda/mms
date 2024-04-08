import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import prisma from "@/prisma/prismaconnect";

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');
  const title = searchParams.get('title');
  const link = searchParams.get('link');


  const blob = await put(`vids/${filename}`, request.body, {
    access: 'public',
  });

  await prisma.vids.create({
    data: {
      title: title,
      link: link,
      file: filename
    }
  })


  return NextResponse.json(blob);
}