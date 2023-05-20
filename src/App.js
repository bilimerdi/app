import React from "react";
import { Route, Routes } from "react-router";
import RegistryForm from "./components/RegistryForm";
import RegistryTable from "./components/RegistryTable";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RegistryTable></RegistryTable>}></Route>
      <Route path="/Form" element={<RegistryForm></RegistryForm>}></Route>
    </Routes>
  );
};

export default App;
