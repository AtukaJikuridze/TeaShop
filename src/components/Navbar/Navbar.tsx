import "./Navbar.css";
import logo from "../../images/icons/logo.png";
import searchicon from "../../images/icons/Search.png";
import profileIcon from "../../images/icons/Person.png";
import cartIcon from "../../images/icons/local_shipping.png";
import MenuBurger from "./MenuBurger";
import { useState } from "react";
import MenuLinks from "./MenuLinks";
import { MyContext } from "../../API/Context";
import { useContext } from "react";

const Navbar = () => {
  const context = useContext(MyContext);
  const [openedMenu, setOpenedMenu] = useState(false);

  const menuOpenHandler = () => {
    setOpenedMenu(!openedMenu);
  };
  return (
    <nav>
      <div className="nav-logo">
        <img className="nav-logo__icon" src={logo} />
        <h1 className="nav-logo__name">brandname</h1>
      </div>
      <div className="links-wrapper">
        <ul className="nav-links">
          <li>
            <p className="link">tea collections</p>
          </li>
          <li>
            <p className="link">accessories</p>
          </li>
          <li>
            <p className="link">blog</p>
          </li>
          <li>
            <p className="link">contact us</p>
          </li>
        </ul>
      </div>
      <MenuBurger openedMenu={openedMenu} setOpenedMenu={menuOpenHandler} />
      <MenuLinks openedMenu={openedMenu} />
      <div className="nav-actions">
        <div className="icon">
          <img src={searchicon} />
        </div>
        <div className="icon">
          <img src={profileIcon} />
        </div>
        <div className="icon">
          <img src={cartIcon} onClick={() => context?.setIsCartActive(true)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
