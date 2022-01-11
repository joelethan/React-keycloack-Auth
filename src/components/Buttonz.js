import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Buttonz = () => {
  const { keycloak } = useKeycloak();
  return (
    <div>
      {!keycloak.authenticated && (
        <button
          type="button"
          className="text-blue-800"
          onClick={() => keycloak.login()}
        >
          Login
        </button>
      )}

      {!!keycloak.authenticated && (
        <button
          type="button"
          className="text-blue-800"
          onClick={() => keycloak.logout()}
        >
          Logout ({keycloak.tokenParsed.preferred_username})
        </button>
      )}
    </div>
  );
};

export default Buttonz;
