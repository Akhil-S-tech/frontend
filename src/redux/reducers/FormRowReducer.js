import { createSlice } from "@reduxjs/toolkit";

import {
  addFormRowToServer,
  getFormRowFromServer,
  updateFormRowInServer,
  deleteFormRowFromServer,
} from "../actions/FormRowAction";

const initialState = {
  formsList: [],
  selectedformcreation: {},
  isLoading: false,
  error: "",
};
const formsSlice = createSlice({
  name: "formsSlice",
  initialState,
  reducers: {
    removeFormCreationFromList: (state, action) => {
      state.formsList = state.formsList.filter(
        (form) => form.id !== action.payload.id
      );
    },

    setSelectedFormCreation: (state, action) => {
      state.selectedformcreation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFormRowFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFormRowFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.formsList = action.payload.data;
      })
      .addCase(getFormRowFromServer.rejected, (state, action) => {
        state.error = action.payload.data.error;
        state.isLoading = false;
        state.formsList = [];
      })
      .addCase(addFormRowToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFormRowToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.formsList.push(action.payload);
      })
      .addCase(addFormRowToServer.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateFormRowInServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateFormRowInServer.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(state.formsList,"state.formsList")
        state.error = "";
        state.formsList = state.formsList.map((form) =>
          form.id === action.payload.id ? action.payload : form
        );
      })
      .addCase(updateFormRowInServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(deleteFormRowFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFormRowFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(deleteFormRowFromServer.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const {
  removeFormCreationFromList,
  setSelectedFormCreation,
} = formsSlice.actions;
export default formsSlice.reducer;
