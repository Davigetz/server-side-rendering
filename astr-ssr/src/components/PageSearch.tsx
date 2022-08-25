import { Jujutsu } from "../types";
import { createEffect, createResource, createSignal } from "solid-js";
import JujutsuCard from "./JujutsuCard";
import "./jujutsuStyle.css";

const fetchJujutsu = async (val) =>
  (await fetch(`/api/search?q=${encodeURIComponent(val)}`)).json();

export default function SearchPage() {
  const [query, setQuery] = createSignal("");
  const [jujutsu] = createResource(query, fetchJujutsu);

  createEffect(async () => {
    const busqueda = query();
  });

  return (
    <>
      <input
        type="text"
        name="q"
        onInput={(e) => setQuery(e.target.value)}
        className="search-input-dynamic"
        placeholder="Search"
      />
      <div className="respuesta-dynamic">
        {jujutsu() &&
          jujutsu()
            .slice(0, 10)
            .map((jujutsu) => (
              <a
                href={`/jujutsu/${jujutsu.id}`}
                key={jujutsu.id}
                class="texto-dynamic"
              >
                <JujutsuCard jujutsu={jujutsu}></JujutsuCard>
              </a>
            ))}
      </div>
    </>
  );
}
