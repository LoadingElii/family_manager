import { GetTodoById } from "@/app/lib/data"
import { TodoView } from "@/app/ui/views/todo-view"

export default async function Page({params} : {params : {id : number}}) {
      const todo = await GetTodoById(params.id)
    
        return(
          <main className="flex justify-center h-screen overflow-hidden">
            <TodoView selectedTodo={todo} />
          </main>
        )
}  