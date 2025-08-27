import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/db";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid credentials" });

    // For now just return success
    return res.status(200).json({ message: "Login successful" });
  }

  res.status(405).json({ error: "Method not allowed" });
}
