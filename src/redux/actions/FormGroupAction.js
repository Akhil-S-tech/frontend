// labelActions.js

import { createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   labelList: [],
//   selectedlabel: {},
//   isLoading: false,
//   error: "",
// };
const BASE_URL = "http://localhost:8000/api/formgroup";

//GET
export const getFormGroupFromServer = createAsyncThunk(
  "formGroups/getFormGroupFromServer",
  async (_, { rejectWithValue }) => {
    const response = await fetch(BASE_URL);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "No FormGroup Found" });
    }
  }
);

//Post
export const addFormGroupToServer = createAsyncThunk(
  "formGroups/addFormGroupToServer",
  async (formGroup, { rejectWithValue }) => {
    const options = {
      method: "POST",
      body: JSON.stringify(formGroup),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(BASE_URL, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "formGroup Not Added" });
    }
  }
);

//PUT
export const updateFormGroupInServer = createAsyncThunk(
  "formGroups/updateFormGroupInServer",
  async (formGroup, { rejectWithValue }) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(formGroup),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    console.log(formGroup,"id=====")

    const response = await fetch(BASE_URL + "/" + formGroup.id, options);

    if (response.ok) {
      console.log(formGroup.id)
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "formGroup Not Added" });
    }
  }
);

//DELETE
export const deleteFormGroupFromServer = createAsyncThunk(
  "formGroups/deleteFormGroupFromServer",
  async (formGroup, { rejectWithValue }) => {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(BASE_URL + "/" + formGroup.id, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "formGroup Not Deleted" });
    }
  }
);
