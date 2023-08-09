// labelActions.js

import { createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   labelList: [],
//   selectedlabel: {},
//   isLoading: false,
//   error: "",
// };
const BASE_URL = "http://localhost:8000/api/form_rows";

//GET
export const getFormRowFromServer = createAsyncThunk(
  "forms/getFormRowFromServer",
  async (_, { rejectWithValue }) => {
    const response = await fetch(BASE_URL);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "No Form Found" });
    }
  }
);

//Post
export const addFormRowToServer = createAsyncThunk(
  "forms/addFormRowToServer",
  async (form, { rejectWithValue }) => {
    const options = {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(BASE_URL, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "form Not Added" });
    }
  }
);

//PUT
export const updateFormRowInServer = createAsyncThunk(
  "forms/updateFormRowInServer",
  async (form, { rejectWithValue }) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const response = await fetch(BASE_URL + "/" + form.id, options);

    if (response.ok) {
      console.log(form.id)
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "form Not Added" });
    }
  }
);

//DELETE
export const deleteFormRowFromServer = createAsyncThunk(
  "forms/deleteFormRowFromServer",
  async (form, { rejectWithValue }) => {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(BASE_URL + "/" + form.id, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "form Not Deleted" });
    }
  }
);
