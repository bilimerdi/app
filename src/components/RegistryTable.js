import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Stack, SvgIcon, Typography, TextField } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useNavigate } from "react-router";

const editUser = (e, row) => {
  return null;
};

const RegistryTable = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.assistant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.tc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

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

  const openUser = (e, row) => {
    navigate("/Detail", { state: { value: row } });
  };

  const descSort = () => {
    fetch("http://localhost:8080/user/sortByDateDesc")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  };

  const ascSort = () => {
    fetch("http://localhost:8080/user/sortByDateAsc")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
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
    { field: "fullName", headerName: "Hasta Ad Soyad", width: 160 },
    { field: "tc", headerName: "TC No", width: 150 },
    { field: "diagnosis", headerName: "Tanı Başlığı", width: 250 },
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
        <Stack direction="row" justifyContent="flex-end">
          <TextField
            sx={{ marginBottom: 2, marginTop: 2, marginBottom: 2 }}
            fullWidth
            label="Search"
            title="Hasta ismi,TC ve Laborant ismi ile arama yapabilirsiniz!"
            value={searchTerm}
            onChange={handleSearch}
          ></TextField>

          <Button title="İlk kayıta göre sırala" onClick={ascSort}>
            <SvgIcon
              component={ArrowUpwardIcon}
              sx={{ color: "#d4a373" }}
            ></SvgIcon>
          </Button>
          <Button title="Son kayıta göre sırala" onClick={descSort}>
            <SvgIcon
              component={ArrowDownwardIcon}
              sx={{ color: "#d4a373" }}
            ></SvgIcon>
          </Button>
          <Button
            onClick={goToForm}
            sx={{
              width: 200,
              height: 55,
              backgroundColor: "#d4a373",
              color: "black",
              marginTop: 2,
              marginBottom: 3,
            }}
          >
            Yeni Hasta Kaydı Ekle
          </Button>
        </Stack>
        <DataGrid
          sx={{ maxHeight: 400 }}
          columns={columns}
          rows={filteredUsers}
          loading={!users.length}
          pagination={true}
        />
      </Stack>
    </Stack>
  );
};

export default RegistryTable;
