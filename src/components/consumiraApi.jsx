import axios from "axios";
import { useState, useEffect } from "react";

export default function ConsumiraApi() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        const resultados = await axios.get("https://rickandmortyapi.com/api/character/");
        setPersonajes(resultados.data.results);
      } catch (error) {
        console.log("error al consumir los datos: " + error.message);
      }
    };
    obtenerPersonajes();
  }, []);
  console.log(personajes);

  return (
    <>
      <div>
        <ul className="fondo">
          {personajes.map((personaje) => (
            <li key={personaje.id} className="container">
                <div>
                  <img src={personaje.image} alt="" />
                </div>
                <div className="info">
                  <h2>{personaje.name}</h2>
                  <p>{personaje.species}</p>
                  <p>{personaje.gender}</p>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
