import "./Navbar.style.css";
// import { Link } from "react-router-dom";
import HeaderCartButton from './Components/layout/HeaderCartButton';
import {Link} from "react-router-dom";

const Navbar = (props) => {
  return (
    <header className="nav">
      <h1>Break Meals</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login.js">Login</Link>
        </li>
        <li>
          <Link to="/Register.js">Register</Link>
        </li>
        <li>
        <HeaderCartButton onClick={props.onShowCart} />
        </li>
      </ul>
      
    </header>
        
  );
};

export default Navbar;
