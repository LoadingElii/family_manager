import { GetFamilyTodos } from "@/app/lib/data";
import { TodoTable } from "@/app/ui/forms/todo-table";
import NoFamilyTodoView from "@/app/ui/views/no-family-todo-view";

export default async function Page() {
  const todos = await GetFamilyTodos();
  const countOfTodos = todos?.length;

  if (todos == undefined) {
    return (
      <main className="flex justify-center h-screen overflow-hidden">
        <NoFamilyTodoView />
      </main>
    );
  }
  
  return (
    <main className="flex justify-center h-screen overflow-hidden">
      <TodoTable todos={todos} countOfTodos={countOfTodos} />
    </main>
  );
}
