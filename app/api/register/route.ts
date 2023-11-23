import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
  try {
    // Validate request body
    const body = await request.json();
    const { email, name, password } = body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user in the database
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error creating user:', error);

    return NextResponse.json(
      { error: 'Failed to create user.' },
      { status: 500 }
    );
  }
}
