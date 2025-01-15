import { Todos } from "@/lib/constants";
import React from "react";

const ViewTodos = () => {
  const columns = ["Id", "Title", "Description", "Created At"];

  return (
    <div>
      <p className="text-2xl/7 font-semibold mb-5">Todos</p>

      <table
        className="shadow-md w-full bg-white rounded-lg
    divide-y divide-gray-200"
      >
        <thead>
          <tr className="rounded-xl">
            {columns.map((col) => (
              <th className="text-left p-3" key={col}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {Todos.map((todo) => (
            <tr className="" key={todo.id}>
              <td className="text-left p-3">{todo.id}</td>
              <td className="text-left p-3">{todo.title}</td>
              <td className="text-left p-3">{todo.description}</td>
              <td className="text-left p-3">{todo.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTodos;
