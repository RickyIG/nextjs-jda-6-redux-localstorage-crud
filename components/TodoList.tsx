// "use client";

// import { useSelector } from "react-redux";
// import { RootState } from "@/store";
// import { BadgeCheck } from "lucide-react";

// export default function TodoList() {
//   const todos = useSelector((state: RootState) => state.todo.todos);

//   if (todos.length === 0) {
//     return <p className="text-gray-500 text-center">No todos yet. Add something above!</p>;
//   }

//   return (
//     <ul className="space-y-2">
//       {todos.map((todo, idx) => (
//         <li
//           key={idx}
//           className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white shadow-sm border border-gray-200"
//         >
//           <BadgeCheck className="text-green-500" size={18} />
//           <span className="text-gray-800">{todo}</span>
//         </li>
//       ))}
//     </ul>
//   );
// }

import { useAppSelector, useAppDispatch } from "@/store";
import { deleteTodo, updateTodo } from "@/store/todoSlice";
import { Button } from "@/components/ui/button";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todo.todos);

  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id: number, currentText: string) => {
    const newText = prompt("Edit todo:", currentText);
    if (newText && newText.trim()) {
      dispatch(updateTodo({ id, text: newText }));
    }
  };

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-slate-100 px-4 py-2 rounded shadow"
        >
          <span>{todo.text}</span>
          <div className="space-x-2">
            <Button variant="outline" onClick={() => handleEdit(todo.id, todo.text)}>
              Edit
            </Button>
            <Button variant="destructive" onClick={() => handleDelete(todo.id)}>
              Delete
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
