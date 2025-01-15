"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { createClient } from "@/app/utils/supabase/client";
import { useEffect, useState } from "react";
import { useUser } from "@/app/providers/UserProvider";

export default function Login() {
  const supabase = createClient();
  const { user } = useUser();
  async function signOut() {
    const res = await supabase.auth.signOut();
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
