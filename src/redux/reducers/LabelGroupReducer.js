import { createSlice } from "@reduxjs/toolkit";

import {
  addLabelGroupToServer,
  getLabelGroupFromServer,
  updateLabelGroupInServer,
  deleteLabelGroupFromServer,
} from "../actions/LabelGroupAction";

const initialState = {
  labelGroupsList: [],
  selectedLabelGroup: {},
  isLoading: false,
  error: "",
};
const labelGroupsSlice = createSlice({
  name: "labelGroupsSlice",
  initialState,
  reducers: {
    removeLabelGroupFromList: (state, action) => {
      state.labelGroupsList = state.labelGroupsList.filter(
        (labelGroup) => labelGroup.id !== action.payload.id
      );
    },

    setSelectedLabelGroup: (state, action) => {
      state.selectedLabelGroup = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLabelGroupFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLabelGroupFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";

        state.labelGroupsList = action.payload;
      })
      .addCase(getLabelGroupFromServer.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.labelGroupsList = [];
      })
      .addCase(addLabelGroupToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addLabelGroupToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.labelGroupsList.push(action.payload);
      })
      .addCase(addLabelGroupToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(updateLabelGroupInServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateLabelGroupInServer.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(state.labelGroupsList,"state.labelGroupsList")
        state.error = "";
        state.labelGroupsList = state.labelGroupsList.map((labelGroup) =>
          labelGroup.id === action.payload.id ? action.payload : labelGroup
        );
      })
      .addCase(updateLabelGroupInServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      .addCase(deleteLabelGroupFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteLabelGroupFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(deleteLabelGroupFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      });
  },
});

export const {
  addLabelGroupToList,
  updateLabelGroupInList,
  removeLabelGroupFromList,
  setSelectedLabelGroup,
} = labelGroupsSlice.actions;
export default labelGroupsSlice.reducer;
