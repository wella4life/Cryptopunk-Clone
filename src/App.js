import "./App.css";
import Header from "./components/Header";
import React from "react";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <PunkList />
    </div>
  );
}

export default App;
