import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import React from "react";

const RegistryDetail = () => {
  const location = useLocation();
  const value = location.state.value;
  const yazdır = () => {
    console.log(value);
  };
  return (
    <div>
      RegistryDetail<Button onClick={yazdır}>Tıkla</Button>
    </div>
  );
};

export default RegistryDetail;
