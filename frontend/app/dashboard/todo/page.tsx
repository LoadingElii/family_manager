import { GetMemberTodos } from "@/app/lib/data";
import { TodoTable } from "@/app/ui/forms/todo-table";


export default async function Page() {
  const todos = await GetMemberTodos();
  const countOfTodos = todos.length;
    return(
      <main className="flex justify-center h-screen overflow-hidden">
        <TodoTable todos={todos} countOfTodos={countOfTodos}/>
      </main>
    )
  }