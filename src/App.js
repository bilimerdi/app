import React from "react";
import { Route, Routes } from "react-router";
import RegistryForm from "./components/RegistryForm";
import RegistryTable from "./components/RegistryTable";
import RegistryDetail from "./components/RegistryDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RegistryTable></RegistryTable>}></Route>
      <Route path="/Form" element={<RegistryForm></RegistryForm>}></Route>
      <Route path="/Detail" element={<RegistryDetail />}></Route>
    </Routes>
  );
};

export default App;
