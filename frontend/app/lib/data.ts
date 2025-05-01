import { BASE_URL, Family, Member, TodoItem } from "./models";
import { cookies } from "next/headers";



//member related GET calls

export async function GetMember() {
  const token = String((await cookies()).get("token")?.value)

  console.log("This is the cookie from storage " + token);

  const response = await fetch(BASE_URL +"/member/", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": token,
    }
  })

  const data = await response.json();
  console.log("respsonse data: " + JSON.stringify(data));
  const member : Member = data["message"];
  
  return member;

}

export async function GetMemberById(id: number) {
  const token = String((await cookies()).get("token")?.value)

  const response = await fetch(`${BASE_URL}/member/${id}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": token,
    }
  })

  const data = await response.json();
  console.log("respsonse data: " + JSON.stringify(data));
  const memberById : Member = data["message"];
  
  return memberById;
}

export async function GetMemberTodos() {
  const token = String((await cookies()).get("token")?.value)

  const response = await fetch(BASE_URL +"/todos/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    }
  })

  const data = await response.json();
  console.log(JSON.stringify(data));
  console.log("member todos list: " + JSON.stringify(data["Todos"]))
  const todos: TodoItem[] = data["Todos"]
  console.log("Member Todos: ", todos);
  return todos;
}

export async function GetTodoById(id : number) {
  const token = String((await cookies()).get("token")?.value)

  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    }
  })

  const data = await response.json();
  console.log(JSON.stringify(data));
  console.log("todo: " + JSON.stringify(data["Todo"]))
  const todo: TodoItem = data["Todo"]
  console.log("Todo: ", todo);
  return todo;
}


//Family related GET calls

export async function GetMyFamily() {
  const token = String((await cookies()).get("token")?.value)

  const response = await fetch(BASE_URL +"/family/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    }
  })

  const data = await response.json();
  console.log("my family: " + JSON.stringify(data))
  const family:Family = data["family"];
  
  return family;

}

export async function GetFamilyTodos() {
  const token = String((await cookies()).get("token")?.value)

  const response = await fetch(BASE_URL +"/todos/family/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    }
  })

  const data = await response.json();
  console.log(JSON.stringify(data));
  console.log("family todos list: " + JSON.stringify(data["Family Todos"]))
  const familyTodos: TodoItem[] = data["Family Todos"]
  console.log("family  Todos: ", familyTodos);
  return familyTodos;
}