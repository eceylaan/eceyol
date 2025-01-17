import { updateSession } from "./app/utils/supabase/middleware";

export async function middleware(request) {
  console.log("Middleware started"); // Middleware'in başladığını kontrol edin.
  const response = await updateSession(request);
}
export const config = {
  matcher: ["/:path*"], // Tüm yolları yakalar.
};
