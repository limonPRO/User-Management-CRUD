"use client";
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteApi, get } from "@/lib/apiClient";
import dayjs from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";

const DataTable = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    data: result,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => get("/users"),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteApi(`/users/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleDelete = (id: string) => {
      deleteMutation.mutate(id);
  };

  const columns: GridColDef[] = [
    {
      field: "first_name",
      headerName: "First Name",
      width: 200,
      sortable: false,
      hideSortIcons: true,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      width: 200,
      sortable: false,
      hideSortIcons: true,
    },
    {
      field: "display_name",
      headerName: "Display Name",
      width: 200,
      sortable: false,
      hideSortIcons: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      sortable: false,
      hideSortIcons: true,
    },
    {
      field: "dob",
      headerName: "Date of Birth",
      width: 200,
      sortable: false,
      hideSortIcons: true,
      valueGetter: (params) => {
        return dayjs(params).format("MM/DD/YYYY");
      },
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 200,
      sortable: false,
      hideSortIcons: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
      hideSortIcons: true,
      renderCell: (params) => (
        <>
          <Button onClick={() => router.push(`/edit/${params?.id}`)}>Edit</Button>
          <Button onClick={() => handleDelete(params?.id as string)}>
            <DeleteIcon />
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="px-[42px] py-[46px]">
      <div className="bg-[#86937F33] py-5 px-6 rounded">
        <div className="flex items-center justify-between">
          <div className="bg-[#86937F] w-[242px] h-[66px] flex items-center pl-3 rounded">
            <h3 className="text-[#ffffff]">Users List</h3>
          </div>
          <button
            onClick={()=> router.push("/add")}
            className="flex items-center gap-3 px-[30px] py-[20px] rounded bg-[#729E5A] text-[#FFFFFF]"
          >
            <span className="text-[#ffffff]">+</span>
            Add New User
          </button>
        </div>
        {error && <div style={{ color: "red" }}>{error.message}</div>}
        <Paper sx={{ height: 400, width: "100%", marginTop: "19px" }}>
          <DataGrid
            loading={isLoading}
            rows={result?.data?.data ? result?.data?.data : []}
            columns={columns}
            pageSizeOptions={[6, 10]}
            sx={{
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#e0e0e0",
                fontWeight: "bold",
                paddingBottom: "10px",
                marginBottom: "10px",
              },
              "& .MuiDataGrid-cell": {},
              "& .MuiDataGrid-row": {
                borderBottom: "1px solid #e0e0e0",
              },
            }}
            disableColumnMenu
            disableRowSelectionOnClick
          />
        </Paper>
      </div>
    </div>
  );
};

export default DataTable;
