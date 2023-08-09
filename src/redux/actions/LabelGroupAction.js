// labelGroupActions.js

import { createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   labelGroupList: [],
//   selectedLabelGroup: {},
//   isLoading: false,
//   error: "",
// };
const BASE_URL = "http://127.0.0.1:8000/api/labelgroup";

//GET
export const getLabelGroupFromServer = createAsyncThunk(
  "labelgroups/getLabelGroupFromServer",
  async (_, { rejectWithValue }) => {
    const response = await fetch(BASE_URL);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "No labelgroup Found" });
    }
  }
);

//Post
export const addLabelGroupToServer = createAsyncThunk(
  "labelgroups/addLabelGroupToServer",
  async (labelGroup, { rejectWithValue }) => {
    const options = {
      method: "POST",
      body: JSON.stringify(labelGroup),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(BASE_URL, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "labelGroup Not Added" });
    }
  }
);

//PUT
export const updateLabelGroupInServer = createAsyncThunk(
  "labelgroups/updateLabelGroupInServer",
  async (labelGroup, { rejectWithValue }) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(labelGroup),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    console.log(labelGroup,"id=====")

    const response = await fetch(BASE_URL + "/" + labelGroup.id, options);

    if (response.ok) {
      console.log(labelGroup.id)
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "labelGroup Not Added" });
    }
  }
);

//DELETE
export const deleteLabelGroupFromServer = createAsyncThunk(
  "labelgroups/deleteLabelGroupFromServer",
  async (labelGroup, { rejectWithValue }) => {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(BASE_URL + "/" + labelGroup.id, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "labelGroup Not Deleted" });
    }
  }
);
