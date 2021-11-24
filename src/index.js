import React from "react";
import ReactDOM from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store.store}> */}
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
