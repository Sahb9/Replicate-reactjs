import React from "react";
import { useEffect } from "react";

// In another component...
const GoogleLoginButton = () => {
  function handleCallbackResponse(response) {
    console.log("encode JWT token", response.credential);
    //var userObject = jwt_decode(response.credential);
    //console.log(userObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "247629613749-2h4b2p8s0m20tlji6o3f3q3p9egp2jud.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return <div id="signDiv"></div>;
};
export default GoogleLoginButton;
