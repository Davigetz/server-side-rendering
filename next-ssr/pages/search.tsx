import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Jujutsu } from "../types";
import JujutsuCard from "../components/JujutsuCard";

const SearchPage: React.FunctionComponent = () => {
  const [query, setQuery] = useState("");
  const [jujutsu, setJujutsu] = useState<Jujutsu[]>([]);

  useEffect(() => {
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then((response) => response.json())
      .then((jujutsu) => setJujutsu(jujutsu));
  }, [query]);

  return (
    <>
      <input
        type="text"
        name="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-s"
        placeholder="Search"
      />
      <div className="mt-3 flex">
        <div
          className="grid grid-cols-2 gap-5"
          style={{
            flex: 0.7,
          }}
        >
          {jujutsu.slice(0, 10).map((jujutsu) => (
            <Link href={`/jujutsu/${jujutsu.id}`} key={jujutsu.id}>
              <a>
                <JujutsuCard jujutsu={jujutsu} />
              </a>
            </Link>
          ))}
        </div>
        <div
          className="px-5"
          style={{
            flex: 0.3,
          }}
        >
          {/* <h2 className="text-2xl font-bold border-b">Averages</h2>
          <div className="grid grid-cols-2 w-full gap-2 mt-3">
            <div className="texto-detail">Género</div>
            <div>{JSON.stringify(jujutsu)}</div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
