import { GetMyFamily } from "@/app/lib/data";
import { FamilyView } from "@/app/ui/views/family-view";

export default async function Page() {
  const family = await GetMyFamily();

    return(
      <main className="flex justify-center h-screen overflow-hidden">
        <FamilyView family={family} />
      </main>
    )
  }