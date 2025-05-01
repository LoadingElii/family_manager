import { GetMemberById } from "@/app/lib/data"
import { MemberByIdView }  from "@/app/ui/views/memberby-id-view"

export default async function Page({params} : {params:{id: number}}) {
  const memberById = await GetMemberById(params.id);

    return(
      <main className="flex justify-center h-screen overflow-hidden">
        <MemberByIdView member={memberById} />
      </main>
    )
  }