"use server";
import { redirect } from "next/navigation";
import { BASE_URL, Family, Member, TodoItem } from "./models";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { decrypt, deleteAuthCookie, encrypt, setAuthCookie } from "./session";

//Member actions

let flaskToken: string | undefined;

export async function SignUpMember(formData: FormData) {
  const newMember = {
    first_name: formData.get("first-name") as string,
    last_name: formData.get("last-name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    age: Number(formData.get("age")),
  };

  const response = await fetch(BASE_URL + "/admin/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMember),
  });

  const data = await response.json();
  const memberId = data["member_id"];
  console.log(memberId);

  if (response.status == 200) {
    redirect("/login");
  }
}

export async function LoginMember(formData: FormData) {
  const loginCredentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const response = await fetch(BASE_URL + "/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginCredentials),
  });

  const data = await response.json();
  const memberId = data["member_id"];
  const token: string = data["token"];
  console.log("FROM FLASK " + token);

  if (response.status == 200) {
    (await cookies()).set("token", token);
    flaskToken = (await cookies()).get("token")?.value;
    const authToken = await encrypt({ memberId });
    setAuthCookie(authToken);
    redirect("/dashboard/home");
  }
}

export async function Logout() {
  await deleteAuthCookie();
  redirect("/login");
}

export async function getSession() {
  const token = (await cookies()).get("auth_token")?.value;
  if (!token) return null;

  return await decrypt(token);
}

export async function UpdateMember(formData: FormData) {
  const token = String((await cookies()).get("token")?.value);

  const updateMember = {
    first_name: formData.get("first-name") as string,
    last_name: formData.get("last-name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const response = await fetch(BASE_URL + "/member/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(updateMember),
  });

  const data = await response.json();
  console.log(JSON.stringify(data));

  if (response.status == 200) {
    revalidatePath("/dashboard/member");
    redirect("/dashboard/member");
  }
}

export async function DeleteMemberById(id: number) {
  const token = String((await cookies()).get("token")?.value);

  const response = await fetch(`${BASE_URL}/member/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const data = await response.json();
  console.log("respsonse data: " + JSON.stringify(data));

  if (response.status == 200) {
    redirect("../../login");
  }
}

//Todo actions

export async function CreateMemberTodo(formData: FormData) {
  const token = String((await cookies()).get("token")?.value);

  const newTodo: TodoItem = {
    description: formData.get("description") as string,
    urgency: formData.get("urgency") as string,
    completed: Number(formData.get("completed")),
  };

  const response = await fetch(BASE_URL + "/todos/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(newTodo),
  });

  const data = await response.json();
  console.log(JSON.stringify(data));

  if (response.status == 200) {
    revalidatePath("/dashboard/todo");
    redirect("/dashboard/todo");
  }
}

export async function CreateFamilyTodo(formData: FormData) {
  const token = String((await cookies()).get("token")?.value);

  const newFamilyTodo: TodoItem = {
    description: formData.get("description") as string,
    urgency: formData.get("urgency") as string,
    completed: Number(formData.get("completed")),
  };

  const response = await fetch(BASE_URL + "/todos/family/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(newFamilyTodo),
  });

  const data = await response.json();
  console.log(JSON.stringify(data));

  if (response.status == 200) {
    revalidatePath("/dashboard/todo/family");
    redirect("/dashboard/todo");
  }
}

export async function UpdateTodoById(formData: FormData) {
  const token = String((await cookies()).get("token")?.value);
  let newTodo = {
    description: formData.get("description") as string,
    urgency: formData.get("urgency") as string,
    completed: Number(formData.get("completed")),
  };

  const updateTodoId = Number(formData.get("todo-id"));

  const response = await fetch(`${BASE_URL}/todos/update/${updateTodoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(newTodo),
  });

  const data = await response.json();
  console.log(JSON.stringify(data));

  if (response.status == 200) {
    redirect("/dashboard/todo");
  }
}

export async function DeleteTodoById(id?: number) {
  const token = String((await cookies()).get("token")?.value);

  const deleteTodoId = id;

  const response = await fetch(`${BASE_URL}/todos/delete/${deleteTodoId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const data = await response.json();
  console.log("response data: " + JSON.stringify(data));

  if (response.status == 200) {
    redirect("/dashboard/todo");
  }
}

//Family actions

export async function CreateFamily(formData: FormData) {
  const token = String((await cookies()).get("token")?.value);

  const family = {
    family_name: formData.get("family_name") as string,
  };

  const response = await fetch(`${BASE_URL}/family/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(family),
  });

  const data = await response.json();
  console.log("response data: " + JSON.stringify(data));

  if (response.status == 200) {
    console.log("All good g");
    redirect("/dashboard/family");
  }
}

export async function UpdateFamilyName(formData: FormData) {
  const token = String((await cookies()).get("token")?.value);

  const family = {
    family_name: formData.get("family_name") as string,
  };

  console.log(family);
  const response = await fetch(`${BASE_URL}/family/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(family),
  });

  const data = await response.json();
  console.log("response data: " + JSON.stringify(data));

  if (response.status == 200) {
    redirect("/dashboard/family");
  }
}

export async function AddFamilyMemberByEmail(formdata: FormData) {
  const token = String((await cookies()).get("token")?.value);

  const newFamilyMember = formdata.get("member_email") as string;

  const response = await fetch(`${BASE_URL}/family/member/add`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(newFamilyMember),
  });

  const data = await response.json();
  console.log("response data: " + JSON.stringify(data));

  if (response.status == 200) {
    redirect("/dashboard/family");
  }
}

export async function DeleteFamilyMemberById(id: number) {
  const token = String((await cookies()).get("token")?.value);

  const deleteFamilyMember = id;

  const response = await fetch(
    `${BASE_URL}/family/member/delete/${deleteFamilyMember}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(deleteFamilyMember),
    }
  );

  const data = await response.json();
  console.log("response data: " + JSON.stringify(data));

  if (response.status == 200) {
    redirect("dashboard/family");
  }
}

export async function DeleteFamily(formData: FormData) {
  const token = String((await cookies()).get("token")?.value);

  const response = await fetch(`${BASE_URL}/family/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const data = await response.json();
  console.log("response data: " + JSON.stringify(data));

  if (response.status == 200) {
    redirect("dashboard/family");
  }
}

export async function onClose() {
  return redirect("."), console.log("modal closed.");
}
