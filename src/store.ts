import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoList";
import textTodoReducer from "./features/textTodo";
import { loadFromLocalStorage, saveToLocalStorage } from "./helpers/storage";

export const store = configureStore({
  reducer: {
    todoList: todoReducer,
    textTodo: textTodoReducer,
  },
  preloadedState: loadFromLocalStorage(),
});
store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
