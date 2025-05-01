import { GetMemberById } from "@/app/lib/data";
import { UpdateMemberForm } from "@/app/ui/forms/update-member-form";

export default async function Page({params}: {params: {id: number}}) {
    const memberById = await GetMemberById(params.id)

    return (
              <main className="flex justify-center h-screen overflow-hidden">
                < UpdateMemberForm updateMember={memberById} />
              </main>
    )
}