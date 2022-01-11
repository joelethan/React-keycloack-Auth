import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import "./App.css";
import Secured from "./components/Secured";
import Welcome from "./components/Welcome";
import keycloak from "./keycloack";
import PrivateRoute from "./helpers/PrivateRoute";
import Buttonz from "./components/Buttonz";

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <div className="container">
          <BrowserRouter>
            <>
              <ul>
                <li>
                  <Link to="/">public component</Link>
                </li>
                <li>
                  <Link to="/secured">secured component</Link>
                </li>
              </ul>
              <Buttonz />
            </>
            <Routes>
              <Route exact path="/" element={<Welcome />} />
              <Route
                path="/secured"
                element={
                  <PrivateRoute>
                    <Secured />
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
