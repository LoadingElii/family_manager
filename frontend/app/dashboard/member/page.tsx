import { GetMember } from "@/app/lib/data"
import { MemberView }  from "@/app/ui/views/member-view";

export default async function Page() {
  const member = await GetMember();

    return(
      <main className="flex justify-center h-screen overflow-hidden">
        <MemberView member={member} />
      </main>
    )
  }