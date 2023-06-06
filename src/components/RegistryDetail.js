import { Button, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const RegistryDetail = () => {
  const [imageURL, setImageURL] = useState("");

  const location = useLocation();
  const value = location.state.value;
  const navigate = useNavigate();

  const returnBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/user/image/${value.id}`
        );
        if (response.ok) {
          const url = URL.createObjectURL(await response.blob());
          setImageURL(url);
        }
      } catch (error) {
        console.error("Error retrieving image:", error);
      }
    };

    getImage();
  }, [value.id]);

  return (
    <div>
      <Stack
        direction="row"
        maxWidth="100%"
        maxHeight="100%"
        sx={{
          backgroundColor: "#d4a373",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <Stack
          sx={{
            height: 500,
            width: 600,
            backgroundColor: "#faedcd",
            textAlign: "left",
            marginLeft: 1,
            marginTop: 1,
            border: 1,
            borderColor: "black",
            padding: 2,
            borderRadius: "2%",
          }}
        >
          <img
            style={{ height: 400, width: 600 }}
            src={imageURL}
            alt="Hasta resmi"
          ></img>
        </Stack>
        <Stack
          sx={{
            height: 500,
            width: 600,
            backgroundColor: "#faedcd",
            textAlign: "left",
            marginLeft: 1,
            marginRight: 1,
            marginTop: 1,
            border: 1,
            borderColor: "black",
            padding: 2,
            borderRadius: "2%",
          }}
        >
          <Typography
            variant="h4"
            sx={{ padding: 2, textAlign: "center", color: "#d4a373" }}
          >
            Hasta Kaydı
          </Typography>
          <Stack
            direction="row"
            sx={{
              padding: 1,
              borderRadius: "2%",
            }}
          >
            <Typography
              sx={{
                marginRight: 3,
                backgroundColor: "#d4a373",
                padding: 1,
                borderRadius: "5%",
              }}
            >
              Hasta Ad Soyad :
            </Typography>
            <Typography sx={{ padding: 1 }}>{value.fullName}</Typography>
          </Stack>
          <Stack direction="row" sx={{ padding: 1 }}>
            <Typography
              sx={{
                marginRight: 3,
                backgroundColor: "#d4a373",
                padding: 1,
                borderRadius: "5%",
              }}
            >
              Hasta TC :
            </Typography>
            <Typography sx={{ padding: 1 }}>{value.tc}</Typography>
          </Stack>
          <Stack direction="row" sx={{ padding: 1 }}>
            <Typography
              sx={{
                marginRight: 3,
                backgroundColor: "#d4a373",
                padding: 1,
                borderRadius: "5%",
              }}
            >
              Tanı Başlığı :
            </Typography>
            <Typography sx={{ padding: 1 }}>{value.diagnosis}</Typography>
          </Stack>
          <Stack direction="column" sx={{ padding: 1 }}>
            <Typography
              sx={{
                marginRight: 3,
                backgroundColor: "#d4a373",
                padding: 1,
                borderRadius: "5%",
              }}
            >
              Tanı Detayları :
            </Typography>
            <Typography
              sx={{
                padding: 1,
                wordBreak: "break-word",
                overflowY: "auto",
                maxHeight: 110,
              }}
            >
              {value.detail}
            </Typography>
          </Stack>
          <Stack direction="column" sx={{ padding: 1 }}>
            <Typography
              sx={{
                marginRight: 3,
                backgroundColor: "#d4a373",
                padding: 1,
                borderRadius: "5%",
              }}
            >
              Raporu Hazırlayan Laborant Ad Soyad :
            </Typography>
            <Typography variant="body1" sx={{ padding: 1 }}>
              {value.assistant}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Button
        sx={{
          width: 200,
          height: 50,
          backgroundColor: "#faedcd",
          color: "black",
          border: 1,
          borderColor: "black",
          position: "fixed",
          bottom: 0,
          right: 0,
          margin: 3,
          marginRight: 1,
        }}
        onClick={returnBack}
      >
        Ana Sayfaya Geri Dön
      </Button>
    </div>
  );
};

export default RegistryDetail;
