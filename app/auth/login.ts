import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.NEXTAUTH_SECRET || "supersecret";

type LoginResponse = {
  message: string;
  token?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "7d" });

  res.status(200).json({ message: "Logged in", token });
}
