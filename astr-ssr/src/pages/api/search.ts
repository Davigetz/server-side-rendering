import { Jujutsu } from "../../types";

export async function get({ request }) {
  const response = await fetch("http://localhost:8080/jujutsu");
  const jujutsu = (await response.json()) as Jujutsu[];

  const req = request[Object.getOwnPropertySymbols(request)[1]];
  const q = req.parsedURL.searchParams.get("q")?.toLowerCase() ?? "";

  return new Response(
    JSON.stringify(
      jujutsu.filter((j: Jujutsu) => j.nombre.toLowerCase().includes(q))
    ),
    {
      status: 200,
    }
  );
}
