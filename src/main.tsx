import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { ApolloProvider } from "@apollo/client";
import client from "./services/graphql";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
