import React from "react";

import ReactDOM from "react-dom/client";
import ReferralCode from "./Components/ReferralCode";
import RefInfo from "./ReferralInfo";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("Referrals") as HTMLElement).render(
  <React.StrictMode>
    <RefInfo />
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById("code") as HTMLElement).render(
  <React.StrictMode>
    <ReferralCode />
  </React.StrictMode>
);
