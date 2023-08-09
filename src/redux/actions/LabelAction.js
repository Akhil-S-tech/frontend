// labelActions.js

import { createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   labelList: [],
//   selectedlabel: {},
//   isLoading: false,
//   error: "",
// };
const BASE_URL = "http://localhost:8000/api/label";

//GET
export const getLabelFromServer = createAsyncThunk(
  "labels/getLabelFromServer",
  async (_, { rejectWithValue }) => {
    const response = await fetch(BASE_URL);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "No label Found" });
    }
  }
);

//Post
export const addLabelToServer = createAsyncThunk(
  "labels/addLabelToServer",
  async (label, { rejectWithValue }) => {
    const options = {
      method: "POST",
      body: JSON.stringify(label),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(BASE_URL, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "label Not Added" });
    }
  }
);

//PUT
export const updateLabelInServer = createAsyncThunk(
  "labels/updateLabelInServer",
  async (label, { rejectWithValue }) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(label),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    console.log(label,"id=====")

    const response = await fetch(BASE_URL + "/" + label.id, options);

    if (response.ok) {
      console.log(label.id)
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "label Not Added" });
    }
  }
);

//DELETE
export const deleteLabelFromServer = createAsyncThunk(
  "labels/deleteLabelFromServer",
  async (label, { rejectWithValue }) => {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(BASE_URL + "/" + label.id, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "label Not Deleted" });
    }
  }
);
