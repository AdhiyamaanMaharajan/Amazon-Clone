import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {" "}
          {/* Switch are been replaced by Routes */}
          {/* Only Route or React.Fragment are allowed to be children of the Routes component, and vice-versa. You are already rendering a Home component on the "/" path, so remove the extraneous <Home /> component. It appears you are also using react-router-dom v6, so the Route components no longer render components via a render or component prop, they now render components as JSX on the element prop. */}
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
