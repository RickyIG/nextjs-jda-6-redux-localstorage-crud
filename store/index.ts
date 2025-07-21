// Tanpa LocalStorage, hanya menggunakan Redux untuk state management

// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./todoSlice";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// export const store = configureStore({
//   reducer: {
//     todo: todoReducer,
//   },
//   devTools: process.env.NODE_ENV !== "production",
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// // Optional: Typed hooks
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;



// Kode dibawah ini dengan LocalStorage untuk persistensi state
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// Simpan todos ke localStorage setiap ada perubahan
store.subscribe(() => {
  try {
    const todos = store.getState().todo.todos;
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Failed to save to localStorage", error);
  }
});

// Type helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


