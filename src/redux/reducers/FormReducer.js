import { createSlice } from "@reduxjs/toolkit";

import {
  addFormToServer,
  getFormFromServer,
  updateFormInServer,
  deleteFormFromServer,
} from "../actions/FormAction";

const initialState = {
  formsList: [],
  selectedform: {},
  isLoading: false,
  error: "",
};
const formsSlice = createSlice({
  name: "formsSlice",
  initialState,
  reducers: {
    removeFormFromList: (state, action) => {
      state.formsList = state.formsList.filter(
        (form) => form.id !== action.payload.id
      );
    },

    setSelectedForm: (state, action) => {
      state.selectedform = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFormFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFormFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.formsList = action.payload.data;
      })
      .addCase(getFormFromServer.rejected, (state, action) => {
        state.error = action.payload.data.error;
        state.isLoading = false;
        state.formsList = [];
      })
      .addCase(addFormToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFormToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.formsList.push(action.payload);
      })
      .addCase(addFormToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(updateFormInServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateFormInServer.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(state.formsList,"state.formsList")
        state.error = "";
        state.formsList = state.formsList.map((form) =>
          form.id === action.payload.id ? action.payload : form
        );
      })
      .addCase(updateFormInServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(deleteFormFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFormFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(deleteFormFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      });
  },
});

export const {
  addformToList,
  updateformInList,
  removeFormFromList,
  setSelectedForm,
} = formsSlice.actions;
export default formsSlice.reducer;
