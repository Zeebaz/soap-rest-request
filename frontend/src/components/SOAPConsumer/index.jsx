import AllInformation from "./components/AllInformation";
import Countries from "./components/Countries";

const SOAPConsumer = () => {
  return (
    <div>
      <h1>SOAPConsumer</h1>
      <div className="container">
        <Countries />
        <AllInformation />
      </div>
    </div>
  );
};
export default SOAPConsumer;
