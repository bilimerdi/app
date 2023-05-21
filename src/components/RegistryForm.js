import { Button, TextField, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import "./RegistryForm.css";
import { useNavigate } from "react-router";

const RegistryForm = () => {
  const [fullName, setFullName] = useState();
  const [tc, setTc] = useState();
  const [assistant, setAssistant] = useState();
  const [detail, setDetail] = useState();
  const [diagnosis, setDiagnosis] = useState();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      fullName: fullName,
      tc: tc,
      assistant: assistant,
      detail: detail,
      diagnosis: diagnosis,
    };
    fetch("http://localhost:8080/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());

    navigate("/");
  };

  return (
    <Stack
      maxWidth="100%"
      maxHeight="100%"
      sx={{
        backgroundColor: "#faedcd",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Stack
        sx={{
          backgroundColor: "#d4a373",
          height: 450,
          width: 500,
          textAlign: "left",
          margin: "auto",
          marginTop: 10,
          border: 1,
          borderColor: "black",
          padding: 5,
          borderRadius: "2%",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography align="center" variant="h5">
            Hasta Kayıt Formu
          </Typography>
          <TextField
            label="Laborant Ad Soyad:"
            id="MuiInputBase-input"
            variant="filled"
            color="success"
            sx={{ marginBottom: 2, marginTop: 2, width: 500 }}
            onChange={(e) => setAssistant(e.target.value)}
            value={assistant}
            required
          ></TextField>
          <Stack direction="row">
            <TextField
              label="Hasta Ad Soyad:"
              variant="filled"
              color="success"
              sx={{ marginBottom: 2, width: 248, backgroundColor: "#faedcd" }}
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              required
            ></TextField>
            <TextField
              label="TC No"
              variant="filled"
              color="success"
              sx={{ marginBottom: 2, marginLeft: 2, width: 237 }}
              onChange={(e) => setTc(e.target.value)}
              value={tc}
              required
            ></TextField>
          </Stack>
          <TextField
            label="Tanı Başlığı"
            variant="filled"
            color="success"
            sx={{ marginBottom: 2, width: 500 }}
            onChange={(e) => setDiagnosis(e.target.value)}
            value={diagnosis}
            required
          ></TextField>
          <Typography sx={{ marginBottom: 2 }}>
            Tanı detaylarını giriniz:
          </Typography>
          <TextField
            multiline={true}
            rows={3}
            color="success"
            sx={{ marginBottom: 2, width: 500, height: 100 }}
            onChange={(e) => setDetail(e.target.value)}
            value={detail}
            required
          ></TextField>
          <Button
            type="submit"
            sx={{
              marginBottom: 2,
              width: 100,
              backgroundColor: "#faedcd",
              color: "black",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          >
            Kaydet
          </Button>
        </form>
      </Stack>
    </Stack>
  );
};

export default RegistryForm;
