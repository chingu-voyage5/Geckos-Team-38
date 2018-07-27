import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { history } from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { auth } from "./firbase/firebase";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

auth.onAuthStateChanged(user => {
  if (user) {
    console.log("sign in");
  } else {
    history.push("/");
    console.log("sign out");
  }
});
