

import { createAsyncThunk } from "@reduxjs/toolkit";


const BASE_URL = "http://localhost:8000/api/dataformlist";

//GET
export const getDataFormListFromServer = createAsyncThunk(
  "dataForms/getDataFormListFromServer",
  async (_, { rejectWithValue }) => {
    const response = await fetch(BASE_URL);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "No DataForm Found" });
    }
  }
);

//Post
export const addDataFormListToServer = createAsyncThunk(
  "dataForms/addDataFormListToServer",
  async (dataForm, { rejectWithValue }) => {
    const options = {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(BASE_URL, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "dataForm Not Added" });
    }
  }
);

//PUT
export const updateDataFormListInServer = createAsyncThunk(
  "dataForms/updateDataFormListInServer",
  async (dataForm, { rejectWithValue }) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(dataForm),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    console.log(dataForm,"id=====")

    const response = await fetch(BASE_URL + "/" + dataForm.id, options);

    if (response.ok) {
      console.log(dataForm.id)
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "dataForm Not Added" });
    }
  }
);

//DELETE
export const deleteDataFormListFromServer = createAsyncThunk(
  "dataForms/deleteDataFormListFromServer",
  async (dataForm, { rejectWithValue }) => {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(BASE_URL + "/" + dataForm.id, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "dataForm Not Deleted" });
    }
  }
);
