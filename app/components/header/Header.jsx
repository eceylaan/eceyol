import Basket from "./Basket";
import Fav from "./fav";
import "./header.css";
import LoginBtn from "./LoginBtn";
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
      <div className="flexRow">
        <h1>Trendyol</h1>
        <SearchBar />

        {/* <Link href={"/"} className={activeClassname("/")}>
          Main page
        </Link>
        <Link href={"/about"} className={activeClassname("/about")}>  
          about
        </Link> */}
      </div>
      <div className="flexRow">
        <LoginBtn />
        <Fav />
        <Basket />
      </div>
    </div>
  );
}
