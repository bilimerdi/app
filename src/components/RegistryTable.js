import React, { useEffect, useState } from "react";
import Icon1 from "../assets/hastane.jpg";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Stack, SvgIcon, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";

const openUser = (e, row) => {
  return null;
};

const editUser = (e, row) => {
  return null;
};

const RegistryTable = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const deleteUser = (e, row) => {
    fetch(`http://localhost:8080/user/remove/${row.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        fetch("http://localhost:8080/user/getAll")
          .then((response) => response.json())
          .then((json) => setUsers(json));
      });
  };

  const goToForm = () => {
    navigate("/Form");
  };

  useEffect(() => {
    fetch("http://localhost:8080/user/getAll")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "Dosya No", width: 100 },
    { field: "fullName", headerName: "Hasta Ad Soyad", width: 200 },
    { field: "tc", headerName: "TC No", width: 150 },
    { field: "diagnosis", headerName: "Tanı Başlığı", width: 200 },
    { field: "assistant", headerName: "Laborant Ad Soyad", width: 200 },
    {
      field: "Edit",
      headerName: "Edit",
      width: 200,
      renderCell: (params) => {
        return (
          <Stack direction="row">
            <Button onClick={(e) => openUser(e, params.row)}>
              <SvgIcon sx={{ color: "#d4a373" }} component={InfoIcon}></SvgIcon>
            </Button>
            <Button onClick={(e) => editUser(e, params.row)}>
              <SvgIcon sx={{ color: "#d4a373" }} component={EditIcon}></SvgIcon>
            </Button>
            <Button onClick={(e) => deleteUser(e, params.row)}>
              <SvgIcon
                sx={{ color: "#d4a373" }}
                component={DeleteIcon}
              ></SvgIcon>
            </Button>
          </Stack>
        );
      },
    },
  ];
  return (
    <Stack
      sx={{
        backgroundColor: "#faedcd",
        width: "1200px",
        textAlign: "left",
        margin: "auto",
        marginTop: 10,
        padding: 5,
      }}
    >
      <Stack alignItems="center">
        <Typography
          sx={{ width: 400, height: 50, color: "#d4a373", fontSize: 30 }}
        >
          HASTALAR TABLOSU
        </Typography>
      </Stack>
      <Button
        onClick={goToForm}
        sx={{
          width: 200,
          height: 50,
          marginLeft: "auto",
          backgroundColor: "#d4a373",
          color: "black",
          marginTop: 2,
          marginBottom: 3,
        }}
      >
        Yeni Hasta Kaydı Ekle
      </Button>

      <DataGrid columns={columns} rows={users} loading={!users.length} />
    </Stack>
  );
};

export default RegistryTable;
