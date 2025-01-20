import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IToDo } from "../models/todo-item";

export interface TodoState {
  todos: IToDo[];
}

const initialState: TodoState = {
  todos: [],
};

// редьюсер
export const todoSlice = createSlice({
  name: "todoList",
  initialState,

  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const newToDo: IToDo = {
        id: state.todos.length + 1,
        text: action.payload, // здесь лежит text, который мы передаем
        isDone: false,
      };
      state.todos = [...state.todos, newToDo];
    },

    updateAction: (state, action: PayloadAction<IToDo>) => {
      const newToDos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });

      state.todos = newToDos;
    },
    deleteAction: (state, action: PayloadAction<IToDo>) => {
      const newToDos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todos = newToDos;
    },
  },
});

export const { createAction, updateAction, deleteAction } = todoSlice.actions;

export default todoSlice.reducer;
