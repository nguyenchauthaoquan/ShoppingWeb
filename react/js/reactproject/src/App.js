// import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import {routes} from "./code/routes"

function App() {
  return (
      <Layout>
          <Routes>
              {routes.map(item =>
                  <Route key={item.page} path={item.path} element={item.component} />
              )}
          </Routes>
      </Layout>
  );
}

export default App;
