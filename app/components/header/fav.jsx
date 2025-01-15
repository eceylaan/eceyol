import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Fav() {
  return (
    <div className="login">
      <FontAwesomeIcon width={14} icon={faHeart} />
      <p>Favorilerim</p>
    </div>
  );
}
