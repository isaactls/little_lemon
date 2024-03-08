import Logo from "../assets/images/Logo.svg";
import Nav from "./Nav";
const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="header-container">
          <img src={Logo} alt="logo" style={{width:"200px"}}/>
          <Nav />
        </div>
      </div>
    </header>
  );
};
export default Header;
