"use client";
import React, { useState } from "react";
import { columns, TodoItem } from "@/app/lib/models";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Pagination} from "@heroui/pagination";

import clsx from "clsx";
import { redirect, usePathname } from "next/navigation";
import { UpdateTodoButton, ViewTodoButton } from "@/app/lib/buttons";

export const TodoTable = ({ todos, countOfTodos }: { todos: TodoItem[], countOfTodos: number }) => {
  const pathname = usePathname();
  const [page, setPage] = useState(1);
  const rowsPerPage = 3;
  const pages =  Math.ceil(countOfTodos / rowsPerPage) || 1;

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return todos.slice(start, end);

  },[page, todos])
  const renderCell = React.useCallback(
    (todo: TodoItem, columnKey: React.Key) => {
      const cellValue = todo[columnKey as keyof TodoItem];

      switch (columnKey) {
        case "id":
          return (
            <div>
              <p className="text-black text-md ">{cellValue}</p>
            </div>
          );

        case "description":
          return (
            <div>
              <p className="text-black text-md">{cellValue}</p>
            </div>
          );

        case "urgency":
          return (
            <div>
              <p className="text-black text-md ">{cellValue}</p>
            </div>
          );

        case "completed":
          return (
            <div>
              <p
                className={clsx(
                  cellValue == 1 ? "text-green-600" : "text-red-600"
                )}
              >
                {String(cellValue)}
              </p>
            </div>
          );

        case "actions":
          return (
            <div className="flex justify-center ">
              <ViewTodoButton id={todo.id} pathname={pathname} />
              <UpdateTodoButton id={todo.id} pathname={pathname} />
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <div className="grid grid-cols-1 justify-center bg-slate-800 rounded-md m-12 w-3/5 md:w-3/4 p-6 ">
      <h1 className=" justify-self-center text-2xl underline underline-offset-8">
        {pathname.includes("family") ? "Family" : "My"} Todos
      </h1>
      <div className="flex flex-row justify-evenly">
        <p className="text-xl">
          {" "}
          <span className="font-bold pr-2">Number of Todos:</span>
          {countOfTodos}
        </p>
        <div>
          <span className="font-bold text-xl pr-2">Create Todo</span>
          <button
            type="button"
            id="create-todo"
            onClick={() => {
              pathname.includes("family")
                ? redirect("../todo/create")
                : redirect("todo/create");
            }}
            className="bg-green-600 text-bold rounded-full hover:opacity-50 h-6 w-6"
          >
            +
          </button>
        </div>
      </div>
      <div className="overflow-y-auto md:overflow-hidden">
        <Table
          aria-label="todo item table"
          bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              showControls 
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>}>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={items}>
            {(item) => (
              <TableRow key={item.id + item.urgency}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
