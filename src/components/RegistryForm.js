import { FormControl, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const RegistryForm = () => {
  const [fullName, setFullName] = useState();
  const [tc, setTc] = useState();
  const [assistant, setAssistant] = useState();
  return (
    <div style={{ backgroundColor: "#faedcd" }}>
      <FormControl>
        <TextField
          label="Laborant Ad Soyad:"
          variant="outlined"
          sx={{ marginBottom: 2 }}
          color="secondary"
          onChange={(e) => setAssistant(e.target.value)}
          value={assistant}
          required
        ></TextField>
        <TextField
          label="Hasta Ad Soyad:"
          variant="outlined"
          sx={{ marginBottom: 2 }}
          color="secondary"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          required
        ></TextField>
        <TextField
          label="TC No"
          variant="outlined"
          sx={{ marginBottom: 2 }}
          color="secondary"
          onChange={(e) => setTc(e.target.value)}
          value={tc}
          required
        ></TextField>
        <Button type="submit">Kaydet</Button>
      </FormControl>
    </div>
  );
};

export default RegistryForm;
