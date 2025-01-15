import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Basket() {
  return (
    <div className="login">
      <Routes>
        <Route pathname={"/about"} component={AboutPage}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
      <FontAwesomeIcon width={14} icon={faCartShopping} />
      <p>Sepetim</p>
    </div>
  );
}
