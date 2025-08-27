import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/db";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    return res.status(201).json(user);
  }

  res.status(405).json({ error: "Method not allowed" });
}
