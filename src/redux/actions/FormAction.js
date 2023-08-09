// labelActions.js

import { createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   labelList: [],
//   selectedlabel: {},
//   isLoading: false,
//   error: "",
// };
const BASE_URL = "http://localhost:8000/api/form";

//GET
export const getFormFromServer = createAsyncThunk(
  "forms/getFormFromServer",
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
export const addFormToServer = createAsyncThunk(
  "forms/addFormToServer",
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
export const updateFormInServer = createAsyncThunk(
  "forms/updateFormInServer",
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
export const deleteFormFromServer = createAsyncThunk(
  "forms/deleteFormFromServer",
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
