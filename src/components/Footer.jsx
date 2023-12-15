import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023</p>
      <Link to="/about" className="btn">
        About Us
      </Link>
    </footer>
  );
};

export default Footer;
