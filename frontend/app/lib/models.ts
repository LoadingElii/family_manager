
export const columns = [
    {name: "ID", uid: "id"},
    {name: "DESCRIPTION", uid: "description"},
    {name: "URGENCY", uid: "urgency"},
    {name: "COMPLETED", uid: "completed"},
    {name: "ACTIONS", uid: "actions"},
  ];
  

  export type Member = {
    id: number 
    first_name?: string,
    last_name?: string,
    email: string,
    password?: string | " ",
    age?: number | " "
}






export type TodoItem = {
    id?: number,
    completed: number,
    description: string,
    urgency: string, 
    family_id?: number, 
    member_id?: number
}


export type Family = {
    id?: number,
    family_name: string,
    members: Member[] | [],
}


export const BASE_URL = "http://127.0.0.1:5000";