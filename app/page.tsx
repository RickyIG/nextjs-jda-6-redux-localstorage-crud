"use client";

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-100 p-6">
      <Card className="w-full max-w-xl shadow-2xl rounded-2xl border-0">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700 flex justify-center items-center gap-2">
            <span className="text-indigo-600">📝</span>
            Todo App with Redux
            <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="Redux Logo" className="w-8 h-8" />
          </h1>
          <h2 className="text-xl font-bold text-center mb-6 text-indigo-700 flex justify-center items-center gap-2">With Local Storage + Operasi CRUD</h2>
          <h2 className="text-xl font-bold text-center mb-6 text-indigo-700 flex justify-center items-center gap-2">Created by: Ricky Indra Gunawan</h2>
          <TodoForm />
          <TodoList />
        </CardContent>
      </Card>
    </main>
  );
}
