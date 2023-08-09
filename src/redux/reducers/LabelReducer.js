import { createSlice } from "@reduxjs/toolkit";
import {
  addLabelToServer,
  getLabelFromServer,
  updateLabelInServer,
  deleteLabelFromServer,
} from "../actions/LabelAction";

const initialState = {
  labelList: [],
  selectedLabel: {},
  isLoading: false,
  error: "",
};
const labelSlice = createSlice({
  name: "labelSlice",
  initialState,
  reducers: {
    removeLabelFromList: (state, action) => {
      state.labelList = state.labelList.filter(
        (label) => label.id !== action.payload.id
      );
    },

    setSelectedLabel: (state, action) => {
      state.selectedLabel = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLabelFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLabelFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.labelList = action.payload;
      })
      .addCase(getLabelFromServer.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.labelList = [];
      })
      .addCase(addLabelToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addLabelToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.labelList.push(action.payload);
      })
      .addCase(addLabelToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(updateLabelInServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateLabelInServer.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(state.labelList,"state.labelList")
        state.error = "";
        state.labelList = state.labelList.map((label) =>
          label.id === action.payload.id ? action.payload : label
        );
      })
      .addCase(updateLabelInServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(deleteLabelFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteLabelFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(deleteLabelFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      });
  },
});

export const {
  addLabelToList,
  updateLabelInList,
  removeLabelFromList,
  setSelectedLabel,
} = labelSlice.actions;
export default labelSlice.reducer;
