import { GetMember, GetTodoById } from "@/app/lib/data"
import { UpdateTodoForm } from "@/app/ui/forms/update-todo-form"

export default async function Page({params} : {params : {id : number}}) {
      const todo = await GetTodoById(params.id)
      console.log(todo);
    
        return(
          <main className="flex justify-center h-screen overflow-hidden">
            <UpdateTodoForm todoToUpdate={todo} />
          </main>
        )
}