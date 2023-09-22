import "./MenuLinks.css";

import searchicon from "../../images/icons/Search.png";
import profileIcon from "../../images/icons/Person.png";
import cartIcon from "../../images/icons/local_shipping.png";
import { MyContext } from "../../API/Context";
import { useContext } from "react";
interface MenuLinksInterface {
  openedMenu: boolean;
}

const MenuLinks = ({ openedMenu }: MenuLinksInterface) => {
  const context = useContext(MyContext);
  return (
    <div
      className="nav-menu__links"
      style={openedMenu ? {} : { transform: "translateX(100%)" }}
    >
      <div className="actions">
        <div className="icon">
          <img src={searchicon} alt="Search Icon" />
        </div>
        <div className="icon">
          <img src={profileIcon} alt="Profile Icon" />
        </div>
        <div className="icon">
          <img
            src={cartIcon}
            alt="Cart Icon"
            onClick={() => console.log(true)}
          />
        </div>
      </div>
      <ul className="links">
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
  );
};

export default MenuLinks;
