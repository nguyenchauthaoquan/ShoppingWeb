// import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";

function App() {
  return (
      <Layout>
          <Routes>
              <Route path={"/"} element={<Home />}/>
          </Routes>
      </Layout>
  );
}

export default App;
