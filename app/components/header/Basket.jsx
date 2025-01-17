import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Basket() {
  return (
    <div className="login">
      <FontAwesomeIcon width={14} icon={faCartShopping} />
      <p>Sepetim</p>
    </div>
  );
}
