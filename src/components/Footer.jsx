import Logo from '../assets/images/Logo.png'
const Footer = () => {
  return (
    <footer>
      <div className="row">
        <strong>Developed By Yisehak</strong>
      <div className="footer-wrapper">
        <ul>
          <li>
            <img src={Logo} alt="Logo" style={{width: '100px'}}/>
          </li>
        </ul>
        <ul>
          <li className="footer-list-title">Dormant Navigation</li>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
        <ul>
          <li className="footer-list-title">Contact</li>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
        <ul>
            <li className="footer-list-title">Social Media Link</li>
            <li>Facebook</li>
            <li>Insagram</li>
            <li>Tiktok</li>
        </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
