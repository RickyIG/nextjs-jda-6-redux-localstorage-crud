"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/todoSlice";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What do you want to do?"
        className="flex-1"
      />
      <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
        Add
      </Button>
    </form>
  );
}
