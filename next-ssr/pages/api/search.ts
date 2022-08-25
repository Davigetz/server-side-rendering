import { NextApiRequest, NextApiResponse } from "next";
import { Jujutsu } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Jujutsu[]>
) {
  const response = await fetch("http://localhost:8080/jujutsu");
  const jujutsu = (await response.json()) as Jujutsu[];

  const q = (req.query?.q as string)?.toLowerCase() ?? "";

  res
    .status(200)
    .json(jujutsu.filter((j: Jujutsu) => j.nombre.toLowerCase().includes(q)));
}
