import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "./context/context";

import { SpeechProvider } from "@speechly/react-client";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="05660ec9-2fc0-413a-886f-cffe312ef53b">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
