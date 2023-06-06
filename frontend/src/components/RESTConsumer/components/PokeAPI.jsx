import { useState, useEffect } from "react";
import { getRestResquest } from "../../../service/apirest";

const PokeAPI = () => {
  const [data, setData] = useState(null);

  const getPokemons = async (url) => {
    const response = await getRestResquest(url);
    setData(response);
  };

  const getOthers = async (isforeware = true) => {
    let newUrl = isforeware ? data.next : data.previous;
    if (!newUrl) return;
    getPokemons(newUrl);
  };

  useEffect(() => {
    getPokemons("https://pokeapi.co/api/v2/pokemon?limit=25&offset=0");
  }, []);

  return (
    <div>
      <h2>Poke API</h2>
      {data ? (
        <>
          <pre>{JSON.stringify(data.results, null, 1)}</pre>
          <button onClick={() => getOthers(false)}>Anteriores</button>
          <button onClick={getOthers}>Siguientes</button>
        </>
      ) : (
        <h2>No data :(</h2>
      )}
    </div>
  );
};

export default PokeAPI;
