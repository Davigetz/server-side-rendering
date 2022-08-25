import React from "react";
import type { NextApiRequest } from "next";
import { Jujutsu } from "../../types";

export async function getServerSideProps(req: NextApiRequest) {
  const response = await fetch("http://localhost:8080/jujutsu");
  const jujutsu = (await response.json()) as Jujutsu[];

  return {
    props: {
      jujutsu: jujutsu.find((j: Jujutsu) => j.id === +req.query.id!),
    },
  };
}

const Detail: React.FunctionComponent<{
  jujutsu: Jujutsu;
}> = ({ jujutsu }) => {
  return (
    <div className="container-detail">
      <div className="img-detail-contrainer">
        <img
          src={`http://localhost:8080/images/${jujutsu.nombre
            .toLowerCase()
            .replace(" ", "_")}.png`}
          alt={jujutsu.nombre}
          className="img-detail"
        />
      </div>
      <div>
        <h1 className="detail-name">{jujutsu.nombre}</h1>
        <div className="subtitle-detail">
          {jujutsu.Anime && jujutsu.Anime.slice(0, 40)}
        </div>
        <div
          className="container-text-detail"
          style={{
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div className="texto-detail">Género</div>
          <div>{jujutsu.Género}</div>
          <div className="texto-detail">Estado</div>
          <div>{jujutsu.Estado}</div>
          <div className="texto-detail">Cumpleaños</div>
          <div>{jujutsu.Cumpleaños}</div>
          <div className="texto-detail">Edad</div>
          <div>{jujutsu.Edad}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
