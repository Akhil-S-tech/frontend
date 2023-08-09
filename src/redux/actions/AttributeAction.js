// attributeActions.js

import { createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   attributeList: [],
//   selectedattribute: {},
//   isLoading: false,
//   error: "",
// };
const BASE_URL = "http://localhost:8000/api/attribute";

//GET
export const getAttributeFromServer = createAsyncThunk(
  "attributes/getAttributeFromServer",
  async (_, { rejectWithValue }) => {
    const response = await fetch(BASE_URL);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "No attribute Found" });
    }
  }
);

//Post
export const addAttributeToServer = createAsyncThunk(
  "attributes/addAttributeToServer",
  async (attribute, { rejectWithValue }) => {
    const options = {
      method: "POST",
      body: JSON.stringify(attribute),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(BASE_URL, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "attribute Not Added" });
    }
  }
);

//PUT
export const updateAttributeInServer = createAsyncThunk(
  "attributes/updateAttributeInServer",
  async (attribute, { rejectWithValue }) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(attribute),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    console.log(attribute,"id=====")

    const response = await fetch(BASE_URL + "/" + attribute.id, options);

    if (response.ok) {
      console.log(attribute.id)
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "attribute Not Added" });
    }
  }
);

//DELETE
export const deleteAttributeFromServer = createAsyncThunk(
  "attributes/deleteAttributeFromServer",
  async (attribute, { rejectWithValue }) => {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(BASE_URL + "/" + attribute.id, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "attribute Not Deleted" });
    }
  }
);
