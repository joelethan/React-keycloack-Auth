import React, { useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";

const Welcome = () => {
  const {
    keycloak: { authenticated },
    initialized,
  } = useKeycloak();
  useEffect(() => {
    console.log(`authenticated`, authenticated);
    console.log(`initialized`, initialized);
  }, [initialized]);
  return (
    <div className="Welcome">
      <p>This is your public-facing component.</p>
    </div>
  );
};

export default Welcome;
