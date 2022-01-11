import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/auth",
  realm: "MyDemo",
  clientId: "my-react-client",
});
// const keycloak = Keycloak({
//   realm: "MyDemo",
//   "auth-server-url": "http://localhost:8080/auth/",
//   "ssl-required": "external",
//   resource: "my-react-client",
//   clientId: "my-react-client",
//   "public-client": true,
//   "confidential-port": 0,
// });

export default keycloak;
