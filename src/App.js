import React from "react";
import { Route, Routes } from "react-router";
import RegistryForm from "./components/RegistryForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RegistryForm></RegistryForm>}></Route>
    </Routes>
  );
};

export default App;
