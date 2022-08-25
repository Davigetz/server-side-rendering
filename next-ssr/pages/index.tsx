import type { NextApiRequest } from "next";
import Link from "next/link";

import { Jujutsu } from "../types";

import JujutsuCard from "../components/JujutsuCard";
import React from "react";

export async function getServerSideProps(req: NextApiRequest) {
  const response = await fetch("http://localhost:8080/jujutsu");
  const jujutsu = (await response.json()) as unknown as Jujutsu[];

  const q = req.query?.q as string;
  console.log(q);
  return {
    props: {
      q: req.query?.q ?? "",
      jujutsu: jujutsu.filter((j: Jujutsu) =>
        j.nombre.toLowerCase().includes(q)
      ),
    },
  };
}

interface HomeProps {
  q: string;
  jujutsu: Array<Jujutsu>;
}

const Home: React.FC<HomeProps> = ({ q, jujutsu }) => {
  const [query, setQuery] = React.useState(q);
  return (
    <>
      <form>
        <input
          type={"text"}
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="entrada"
          placeholder="Buscar"
        />
      </form>
      <div className="respuesta">
        {jujutsu.slice(0, 10).map((jujutsu, i) => (
          <Link href={`/jujutsu/${jujutsu.id}`} key={i}>
            <a>
              <JujutsuCard jujutsu={jujutsu} />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
