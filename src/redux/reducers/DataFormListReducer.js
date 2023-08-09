import { createSlice } from "@reduxjs/toolkit";

import {
  addDataFormListToServer,
  getDataFormListFromServer,
  updateDataFormListInServer,
  deleteDataFormListFromServer,
} from "../actions/DataFormListAction";

const initialState = {
  dataFormList: [],
  selectedDataForm: {},
  isLoading: false,
  error: "",
};
const dataFormSlice = createSlice({
  name: "dataFormSlice",
  initialState,
  reducers: {
    removeDataFormListFromList: (state, action) => {
      state.dataFormList = state.dataFormList.filter(
        (dataForm) => dataForm.id !== action.payload.id
      );
    },

    setSelectedDataFormList: (state, action) => {
      state.selectedDataForm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFormListFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataFormListFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.dataFormList = action.payload;
      })
      .addCase(getDataFormListFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
        state.dataFormList = [];
      })
      .addCase(addDataFormListToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDataFormListToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.dataFormList.push(action.payload);
      })
      .addCase(addDataFormListToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(updateDataFormListInServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDataFormListInServer.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(state.dataFormList,"state.dataFormeList")
        state.error = "";
        state.dataFormList = state.dataFormList.map((dataform) =>
          dataform.id === action.payload.id ? action.payload : dataform
        );
      })
      .addCase(updateDataFormListInServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(deleteDataFormListFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDataFormListFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(deleteDataFormListFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      });
  },
});

export const {
  removeDataFormListFromList,
  setSelectedDataFormList,
} = dataFormSlice.actions;
export default dataFormSlice.reducer;
