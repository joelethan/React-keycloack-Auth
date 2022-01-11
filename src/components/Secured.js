import React, { useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";

const Secured = () => {
  const {
    keycloak: { authenticated },
    initialized,
  } = useKeycloak();
  useEffect(() => {
    console.log(`authenticated`, authenticated);
    console.log(`initialized`, initialized);
  }, [initialized]);

  return <div>Secured</div>;
};

export default Secured;
