
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:8000/api/dataformgroup";

//GET
export const getDataFormGroupFromServer = createAsyncThunk(
  "dataFormGroups/getDataFormGroupFromServer",
  async (_, { rejectWithValue }) => {
    const response = await fetch(BASE_URL);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "No DataFormGroup Found" });
    }
  }
);

//Post
export const addDataFormGroupToServer = createAsyncThunk(
  "dataFormGroups/addDataFormGroupToServer",
  async (DataFormGroup, { rejectWithValue }) => {
    const options = {
      method: "POST",
      body: JSON.stringify(DataFormGroup),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(BASE_URL, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "DataFormGroup Not Added" });
    }
  }
);

//PUT
export const updateDataFormGroupInServer = createAsyncThunk(
  "dataFormGroups/updateDataFormInServer",
  async (DataFormGroup, { rejectWithValue }) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(DataFormGroup),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    console.log(DataFormGroup,"id=====")

    const response = await fetch(BASE_URL + "/" + DataFormGroup.id, options);

    if (response.ok) {
      console.log(DataFormGroup.id)
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "DataFormGroup Not Added" });
    }
  }
);

//DELETE
export const deleteDataFormGroupFromServer = createAsyncThunk(
  "dataFormGroups/deleteDataFormFromServer",
  async (DataFormGroup, { rejectWithValue }) => {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(BASE_URL + "/" + DataFormGroup.id, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "DataFormGroup Not Deleted" });
    }
  }
);
