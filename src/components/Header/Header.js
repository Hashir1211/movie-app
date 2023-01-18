import { Link } from "react-router-dom";
import user from "../pictures/user.png"
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo"> Ultimate Movie Application</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="image" />
      </div>
    </div>
  );
};

export default Header;
