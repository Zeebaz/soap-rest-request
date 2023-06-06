import { useState } from "react";
import "./App.css";
import RESTConsumer from "./components/RESTConsumer";
import SOAPConsumer from "./components/SOAPConsumer";

function App() {
  const [viewToggle, setViewToggle] = useState(true);
  return (
    <div>
      <button onClick={() => setViewToggle(!viewToggle)}>Switch</button>{" "}
      {viewToggle ? <RESTConsumer /> : <SOAPConsumer />}
    </div>
  );
}

export default App;
