import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ITextTodoState {
  text: string;
}

const initialState: ITextTodoState = {
  text: "",
};

// редьюсер
export const textTodoSlice = createSlice({
  name: "textTodo",
  initialState,

  reducers: {
    saveAction: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    clearAction: (state) => {
      state.text = "";
    },
  },
});

export const { saveAction, clearAction } = textTodoSlice.actions;

export default textTodoSlice.reducer;
