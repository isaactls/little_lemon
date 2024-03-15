import Logo from "../assets/images/Logo.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="header-container">
          <Link to='/' className="home-logo-link"><img src={Logo} alt="logo"/></Link>
          <Nav />
        </div>
      </div>
    </header>
  );
};
export default Header;
