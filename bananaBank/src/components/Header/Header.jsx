import "./Header.css";
import AccountIcon from "../Icons/AccountIcon";
import MenuIcon from "../Icons/MenuIcon";

const Header = (props) => {
  return (
    <header>
      <nav>
        <AccountIcon />
        <span>{props.headerText}</span>
        <MenuIcon />
      </nav>
    </header>
  );
};

export default Header;
