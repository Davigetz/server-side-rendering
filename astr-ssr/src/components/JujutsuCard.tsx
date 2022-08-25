import { Jujutsu } from "../types";
import "./jujutsuStyle.css";

const JujutsuCard = ({ jujutsu }) => (
  <div class="container-card">
    <div
      title={jujutsu.nombre}
      class="title-card-img"
      style={{
        "background-image": `url(http://localhost:8080/images/${jujutsu.nombre
          .toLowerCase()
          .replace(" ", "_")}.png)`,
      }}
    >
      <img
        src={`http://localhost:8080/images/${jujutsu.nombre
          .toLowerCase()
          .replace(" ", "_")}.png`}
        style={{ width: "100%" }}
      />
    </div>
    <div class="container-card-text">
      <div style={{ marginBottom: "0.5rem" }}>
        <div class="text-name">{jujutsu.nombre}</div>
        <p class="card-episodio">
          {jujutsu.Anime && jujutsu.Anime.slice(0, 40)}
        </p>
        <div class="card-text">
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
