import React from "react";
import { Jujutsu } from "../types";

const JujutsuCard: React.FunctionComponent<{ jujutsu: Jujutsu }> = ({
  jujutsu,
}) => (
  <div className="container-card">
    <div
      title={jujutsu.nombre}
      className="title-card-img"
      style={{
        backgroundImage: `url(http://localhost:8080/images/${jujutsu.nombre
          .toLowerCase()
          .replace(" ", "_")}.png)`,
      }}
    ></div>
    <div className="container-card-text">
      <div style={{ marginBottom: "0.5rem" }}>
        <div className="text-name">{jujutsu.nombre}</div>
        <p className="card-episodio">
          {jujutsu.Anime && jujutsu.Anime.slice(0, 40)}
        </p>
        <div className="card-text">
          <p>Especie: {jujutsu.Género}</p>
          <p>Estado: {jujutsu.Estado}</p>
          <p>Cumpleaños: {jujutsu.Cumpleaños}</p>
          <p>Edad: {jujutsu.Edad}</p>
        </div>
      </div>
    </div>
  </div>
);

export default JujutsuCard;
