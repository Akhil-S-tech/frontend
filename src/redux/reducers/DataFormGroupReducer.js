import { createSlice } from "@reduxjs/toolkit";

import {
  addDataFormGroupToServer,
  getDataFormGroupFromServer,
  updateDataFormGroupInServer,
  deleteDataFormGroupFromServer,
} from "../actions/DataFormGroupAction";

const initialState = {
  dataFormGroupList: [],
  selectedDataFormGroup: {},
  isLoading: false,
  error: "",
};
const dataFormGroupSlice = createSlice({
  name: "dataFormGroupSlice",
  initialState,
  reducers: {
    removeDataFormGroupFromList: (state, action) => {
      state.dataFormGroupList = state.dataFormGroupList.filter(
        (dataFormGroup) => dataFormGroup.id !== action.payload.id
      );
    },

    setSelectedDataFormGroup: (state, action) => {
      state.selectedDataFormGroup = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFormGroupFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataFormGroupFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.dataFormGroupList = action.payload;
        console.log(action.payload)
      })
      .addCase(getDataFormGroupFromServer.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.dataFormGroupList = [];
      })
      .addCase(addDataFormGroupToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDataFormGroupToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.dataFormGroupList.push(action.payload);
      })
      .addCase(addDataFormGroupToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(updateDataFormGroupInServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDataFormGroupInServer.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(state.dataFormGroupList,"state.dataFormGroupeList")
        state.error = "";
        state.dataFormGroupList = state.dataFormGroupList.map((dataFormGroup) =>
          dataFormGroup.id === action.payload.id ? action.payload : dataFormGroup
        );
      })
      .addCase(updateDataFormGroupInServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(deleteDataFormGroupFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDataFormGroupFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(deleteDataFormGroupFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      });
  },
});

export const {
  removeDataFormGroupFromList,
  setSelectedDataFormGroup,
} = dataFormGroupSlice.actions;
export default dataFormGroupSlice.reducer;
