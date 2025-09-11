import { db } from "@/utils/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, username, password } = body;

    if (!email || !username || !password) {
      return NextResponse.json(
        { user: null, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // check if email already exists
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    // check if username already exists
    const existingUserByUsername = await db.user.findUnique({
      where: { username: username },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: "User with this username already exists" },
        { status: 409 }
      );
    }

    // hash password
    const hashedPassword = await hash(password, 10);

    // create new user
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { user: newUser, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST /api/user error:", error);
    return NextResponse.json(
      { user: null, message: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
