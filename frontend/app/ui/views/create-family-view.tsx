import { CreateFamily } from "@/app/lib/action";

export const CreateFamilyModal = () => {
  return (
    <div className="grid grid-cols-1 justify-center rounded-md m-12 w-3/5 md:w-3/4 p-6">
      <form
        action={CreateFamily}
        className="grid grid-cols-1 justify-items-center rounded-md m-12 w-3/5 md:w-3/4 p-6 modal-content "
      >
        <h1 className="text-white  font-semibold text-lg mb-4">Enter Family Name</h1>
        <input className="text-black w-72" type="text" name="family_name" id="family_name" />
        <button type="submit" className=" justify-self-center w-36 mt-2 text-white rounded-md bg-blue-600 hover:bg-blue-300">
          Create Family
        </button>
      </form>
    </div>
  );
};
