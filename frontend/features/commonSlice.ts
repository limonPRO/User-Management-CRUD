import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isEditing: boolean; 
  editId: string | null; 
}

const initialState: UserState = {
  isEditing: false,
  editId: null,
};

const commonSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startEditing: (state, action: PayloadAction<string>) => {
      state.isEditing = true; 
      state.editId = action.payload; 
    },

    stopEditing: (state) => {
      state.isEditing = false; 
      state.editId = null; 
    },
  },
});

export const { startEditing, stopEditing } = commonSlice.actions;
export default commonSlice.reducer;
