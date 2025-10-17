import React from "react";
import ReactDOM from "react-dom/client";
import ReferralCode from "./Components/ReferralCode";
import RefInfo from "./ReferralInfo";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("Referrals") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/Project/">
      <RefInfo />
    </BrowserRouter>
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById("code") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/Project/">
      <ReferralCode />
    </BrowserRouter>
  </React.StrictMode>
);
