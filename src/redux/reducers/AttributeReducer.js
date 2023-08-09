import { createSlice } from "@reduxjs/toolkit";

import {
  addAttributeToServer,
  getAttributeFromServer,
  updateAttributeInServer,
  deleteAttributeFromServer,
} from "../actions/AttributeAction";

const initialState = {
  attributeList: [],
  selectedAttribute: {},
  isLoading: false,
  error: "",
};
const attributeSlice = createSlice({
  name: "attributeSlice",
  initialState,
  reducers: {
    removeAttributeFromList: (state, action) => {
      state.attributeList = state.attributeList.filter(
        (attribute) => attribute.id !== action.payload.id
      );
    },

    setSelectedAttribute: (state, action) => {
      state.selectedAttribute = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAttributeFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAttributeFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.attributeList = action.payload;
      })
      .addCase(getAttributeFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
        state.attributeList = [];
      })
      .addCase(addAttributeToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAttributeToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.attributeList.push(action.payload);
      })
      .addCase(addAttributeToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(updateAttributeInServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAttributeInServer.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(state.attributeList,"state.attributeList")
        state.error = "";
        state.attributeList = state.attributeList.map((attribute) =>
          attribute.id === action.payload.id ? action.payload : attribute
        );
      })
      .addCase(updateAttributeInServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(deleteAttributeFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAttributeFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(deleteAttributeFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      });
  },
});

export const {
  removeAttributeFromList,
  setSelectedAttribute,
} = attributeSlice.actions;
export default attributeSlice.reducer;
