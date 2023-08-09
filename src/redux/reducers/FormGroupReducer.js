import { createSlice } from "@reduxjs/toolkit";

import {
  addFormGroupToServer,
  getFormGroupFromServer,
  updateFormGroupInServer,
  deleteFormGroupFromServer,
} from "../actions/FormGroupAction";

const initialState = {
  formGroupList: [],
  selectedformGroup: {},
  isLoading: false,
  error: "",
};
const formGroupsSlice = createSlice({
  name: "formGroupsSlice",
  initialState,
  reducers: {
    removeFormGroupFromList: (state, action) => {
      state.formGroupList = state.formGroupList.filter(
        (formGroup) => formGroup.id !== action.payload.id
      );
    },

    setSelectedFormGroup: (state, action) => {
      state.selectedformGroup = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFormGroupFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFormGroupFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.formGroupList = action.payload;
      })
      .addCase(getFormGroupFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
        state.formGroupList = [];
      })
      .addCase(addFormGroupToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFormGroupToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.formGroupList.push(action.payload);
      })
      .addCase(addFormGroupToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(updateFormGroupInServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateFormGroupInServer.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(state.formGroupList,"state.formGroupList")
        state.error = "";
        state.formGroupList = state.formGroupList.map((formGroup) =>
          formGroup.id === action.payload.id ? action.payload : formGroup
        );
      })
      .addCase(updateFormGroupInServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(deleteFormGroupFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFormGroupFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(deleteFormGroupFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      });
  },
});

export const {
  addFormGroupToList,
  updateFormGroupInList,
  removeFormGroupFromList,
  setSelectedFormGroup,
} = formGroupsSlice.actions;
export default formGroupsSlice.reducer;
