"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";
import { cookies } from "next/headers";

export async function login(formData) {
  const cookiess = cookies();
  const supabase = await createClient(cookiess);

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData) {
  const cookiess = cookies();
  const supabase = await createClient(cookiess);

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("firstName"),
    lastname: formData.get("lastName"),
    phone: formData.get("phone"),
  };

  const { error, data: user } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: { data: { lastname: data.lastname, name: data.name, role: "client" } },
  });
  console.error(user.user.user_metadata.name);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
