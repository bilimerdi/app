import { Button, TextField, Stack, Typography, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./RegistryForm.css";
import { useNavigate, useLocation } from "react-router";

const RegistryForm = () => {
  const [fullName, setFullName] = useState("");
  const [tc, setTc] = useState("");
  const [assistant, setAssistant] = useState("");
  const [detail, setDetail] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [editBool, setEditBool] = useState(false);
  const [selectedFile, setSelectedFile] = useState();

  const location = useLocation();
  const value = location.state?.value;

  const navigate = useNavigate();

  useEffect(() => {
    if (value) {
      setFullName(value.fullName);
      setTc(value.tc);
      setAssistant(value.assistant);
      setDetail(value.detail);
      setDiagnosis(value.diagnosis);
      setEditBool(true);
    }
  }, [value]);

  const editUser = () => {
    const template = {
      fullName: fullName,
      tc: tc,
      diagnosis: diagnosis,
      detail: detail,
      assistant: assistant,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(template),
    };
    fetch(`http://localhost:8080/user/edit/${value.id}`, requestOptions).then(
      (response) =>
        response.json().then(() => {
          navigate("/");
          window.location.reload();
        })
    );
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

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

    const formData = new FormData();
    formData.append("image", selectedFile);

    fetch("http://localhost:8080/user/image/upload", {
      method: "POST",
      body: formData,
    }).then((response) => response.json());

    navigate("/");
    window.location.reload();
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
              error={tc.length !== 11} // Hata durumunu kontrol et
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

          {editBool ? (
            <Button
              onClick={editUser}
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
              Edit User
            </Button>
          ) : (
            <Stack>
              <Input type="file" onChange={handleFileChange}></Input>
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
            </Stack>
          )}
        </form>
      </Stack>
    </Stack>
  );
};

export default RegistryForm;
