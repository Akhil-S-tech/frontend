import { createSlice } from "@reduxjs/toolkit";

import {
  addFormCreationToServer,
  getFormCreationFromServer,
  updateFormCrationInServer,
  deleteFormCreationFromServer,
} from "../actions/FormCreationAction";
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
      .addCase(getFormCreationFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFormCreationFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.formsList = action.payload;
        console.log(action.payload)
      })
      .addCase(getFormCreationFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
        state.formsList = [];
      })
      .addCase(addFormCreationToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFormCreationToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.formsList.push(action.payload);
      })
      .addCase(addFormCreationToServer.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateFormCrationInServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateFormCrationInServer.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(state.formsList,"state.formsList")
        state.error = "";
        state.formsList = state.formsList.map((form) =>
          form.id === action.payload.id ? action.payload : form
        );
      })
      .addCase(updateFormCrationInServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(deleteFormCreationFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFormCreationFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(deleteFormCreationFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      });
  },
});

export const {
  removeFormCreationFromList,
  setSelectedFormCreation,
} = formsSlice.actions;
export default formsSlice.reducer;
