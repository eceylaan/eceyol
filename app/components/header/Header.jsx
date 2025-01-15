import Basket from "./Basket";
import Fav from "./fav";
import "./header.css";
import Login from "./Login";
import SearchBar from "./Searchbar";

export default function Header() {
  // function activeClassname(url) {
  //   const path = usePathname();
  //   if (path.endsWith(url)) {
  //     return "active";
  //   } else {
  //     return "normal";
  //   }
  // }

  return (
    <div className="header">
      <div className="flex-row">
        <h1>Trendyol</h1>
        <SearchBar />

        {/* <Link href={"/"} className={activeClassname("/")}>
          Main page
        </Link>
        <Link href={"/about"} className={activeClassname("/about")}>  
          about
        </Link> */}
      </div>
      <div className="flex-row">
        <Login />
        <Fav />
        <Basket />
      </div>
    </div>
  );
}
