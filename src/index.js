import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/Store";

import App from "./App";
import { setSelectedAttribute } from "./redux/reducers/AttributeReducer";
import { setSelectedLabelGroup } from "./redux/reducers/LabelGroupReducer";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// Add this in node_modules/react-dom/index.js
// serviceWorker.unregister();
