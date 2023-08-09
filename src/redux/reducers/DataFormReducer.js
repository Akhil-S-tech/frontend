import { createSlice } from "@reduxjs/toolkit";

import {
  addDataFormToServer,
  getDataFormFromServer,
  updateDataFormInServer,
  deleteDataFormFromServer,
} from "../actions/DataFormAction";

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
    removeDataFormFromList: (state, action) => {
      state.dataFormList = state.dataFormList.filter(
        (dataForm) => dataForm.id !== action.payload.id
      );
    },

    setSelectedDataForm: (state, action) => {
      state.selectedDataForm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFormFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataFormFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.dataFormList = action.payload;
        console.log(action.payload)
      })
      .addCase(getDataFormFromServer.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.dataFormList = [];
      })
      .addCase(addDataFormToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDataFormToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.dataFormList.push(action.payload);
      })
      .addCase(addDataFormToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(updateDataFormInServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDataFormInServer.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(state.dataFormList,"state.dataFormeList")
        state.error = "";
        state.dataFormList = state.dataFormList.map((dataform) =>
          dataform.id === action.payload.id ? action.payload : dataform
        );
      })
      .addCase(updateDataFormInServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(deleteDataFormFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDataFormFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(deleteDataFormFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      });
  },
});

export const {
  removeDataFormFromList,
   setSelectedDataForm,
} = dataFormSlice.actions;
export default dataFormSlice.reducer;
