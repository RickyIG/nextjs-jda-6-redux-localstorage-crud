// Tanpa LocalStorage, hanya menggunakan Redux untuk state management

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface Todo {
//   id: number;
//   text: string;
// }

// interface TodoState {
//   todos: Todo[];
// }

// const initialState: TodoState = {
//   todos: [],
// };

// const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action: PayloadAction<string>) => {
//       const newTodo: Todo = {
//         id: Date.now(), // atau bisa pakai uuid jika perlu
//         text: action.payload,
//       };
//       state.todos.push(newTodo);
//     },
//     updateTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
//       const todo = state.todos.find((t) => t.id === action.payload.id);
//       if (todo) {
//         todo.text = action.payload.text;
//       }
//     },
//     deleteTodo: (state, action: PayloadAction<number>) => {
//       state.todos = state.todos.filter((t) => t.id !== action.payload);
//     },
//   },
// });

// export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
// export default todoSlice.reducer;



// Kode dibawah ini dengan LocalStorage untuk persistensi state
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
}

export interface TodoState {
  todos: Todo[];
}

// Ambil dari localStorage (jika ada)
const loadTodosFromLocalStorage = (): Todo[] => {
  try {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const initialState: TodoState = {
  todos: typeof window !== "undefined" ? loadTodosFromLocalStorage() : [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
