import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function updateSession(request) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options));
      },
    },
  });
  // no code here
  const {
    data: { supabaseUser },
  } = await supabase.auth.getUser();
  const loggedInUser = {};
  if (supabaseUser.user_metadata.role === "client") {
    loggedInUser = await supabase.from("users").select("*").eq("user_id", supabaseUser.id);
  } else {
    loggedInUser = await supabase.from("sellers").select("*").eq("user_id", supabaseUser.id);
  }

  const permissionRoutes = [];
  if (supabaseUser?.user_metadata.role === "client") {
    permissionRoutes.push("/", "/about");
  } else {
    permissionRoutes.push("/dashboard");
  }
  // TODO : Ece - burada user kontrolleri gerçekleşecek ve buna gore rotalara gidilecek

  // if (!supabaseUser && !request.nextUrl.pathname.startsWith("/auth/login") && !request.nextUrl.pathname.startsWith("/auth")) {
  //   // no user, potentially respond by redirecting the user to the login page
  //   const url = request.nextUrl.clone();
  //   url.pathname = "/auth/login";
  //   return NextResponse.redirect(url);
  // }

  return { supabaseResponse, user };
}
