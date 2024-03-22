import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import RouterIndex from "./app/core/router/RouterIndex";
import HeaderGlobal from "./app/shared/components/HeaderGlobal";
import store from "./app/core/store/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <HeaderGlobal />
      <BrowserRouter>
        <RouterIndex />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
