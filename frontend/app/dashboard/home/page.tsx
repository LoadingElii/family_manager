import { getSession } from "@/app/lib/action";
import { GetFamilyTodos, GetMember, GetMemberTodos } from "@/app/lib/data";
import { HomeView } from "@/app/ui/views/home-view";

export default async function Page() {
  const session = await getSession();
  const user = await GetMember();
  const memberTodos = await GetMemberTodos();
  const familyTodos = await GetFamilyTodos();


  if (!session) {
    return <h1>Not Authorized</h1>;
  }

  return (
    <main className="flex justify-center h-screen overflow-hidden">
      <HomeView user={user} memberTodo={memberTodos} familyTodo={familyTodos}/>
    </main>
  );
}
