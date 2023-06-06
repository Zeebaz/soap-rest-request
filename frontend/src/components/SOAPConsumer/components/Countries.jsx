import { useState, useEffect } from "react";
import { getRestResquest } from "../../../service/apirest";

const Countries = () => {
  const [data, setData] = useState(null);

  const getCountries = async (url) => {
    const response = await getRestResquest(url);
    console.log({response})
    setData(response);
  };

  const getOthers = async (isforeware = true) => {
    let newUrl = isforeware ? data.next : data.previous;
    if (!newUrl) return;
    getCountries(newUrl);
  };

  useEffect(() => {
    getCountries("http://127.0.0.1:5000/countries?limit=25&offset=0");
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

export default Countries;
