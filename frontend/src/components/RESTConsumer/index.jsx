import JsonPlaceHolderAPI from "./components/JsonPlaceHolderAPI";
import PokeAPI from "./components/PokeAPI";

const RESTConsumer = () => {
  return (
    <div>
      <h1>RESTConsumer</h1>
      <div className="container">
        <PokeAPI />
        <JsonPlaceHolderAPI />
      </div>
    </div>
  );
};
export default RESTConsumer;
