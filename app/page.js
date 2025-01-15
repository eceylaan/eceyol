import Image from "next/image";
import styles from "./page.module.css";
import HeaderTop from "./components/headertop/headertop";
import Header from "./components/header/Header";
import { createClient } from "./utils/supabase/server";
import { cookies } from "next/headers";
import Categories from "./components/categories/Categories";
import { UserProvider } from "./providers/UserProvider";

export default function Home() {
  return (
    <div className="mainContainer">
      <UserProvider>
        <HeaderTop />
        <Header />
        <Categories />
      </UserProvider>
    </div>
  );
}
