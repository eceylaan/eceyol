"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@/app/utils/supabase/client";

// Kullanıcı bilgilerini sağlayacak Context
const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const supabase = createClient();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Supabase kullanıcı bilgisini al
    async function fetchUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    }

    fetchUser();

    // Supabase kullanıcı değişikliklerini takip et
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase]);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
