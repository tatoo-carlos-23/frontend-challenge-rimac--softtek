import { BrowserRouter } from "react-router-dom";
import RouterIndex from "./core/router/RouterIndex";
import HeaderGlobal from "./shared/components/HeaderGlobal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderGlobal />
      <BrowserRouter>
        <RouterIndex />
      </BrowserRouter>
    </div>
  );
}

export default App;
