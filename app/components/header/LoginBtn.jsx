"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { createClient } from "@/app/utils/supabase/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginBtn() {
  const supabase = createClient();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(user ? false : true);
  const router = useRouter();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const { data } = await supabase.auth.getUser();
        setUser(data.user);
        console.log("User fetched:", data.user);
        setLoading(false);
      } catch (error) {
        throw Error(error);
      }
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      console.log("Auth state changed:", session?.user);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null); // Kullanıcıyı sıfırla
    router.push("/auth/login");
    console.log("calıstı sign out");
  }
  if (loading) {
    return <div>Fetching User</div>;
  }
  return (
    <>
      {user ? (
        <button onClick={signOut} className="login">
          <p>Çıkış Yap</p>
        </button>
      ) : (
        <Link href="/auth/login" className="login">
          <FontAwesomeIcon width={14} icon={faUser} />
          <p>Giriş Yap</p>
        </Link>
      )}
    </>
  );
}
