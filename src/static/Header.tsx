import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex gap-[30px] justify-center">
      <NavLink to="/">
        <nav>Home</nav>
      </NavLink>
      <NavLink to="/aboutus">
        <nav>About Us</nav>
      </NavLink>
      <NavLink to="/services">
        <nav>Services</nav>
      </NavLink>
      <NavLink to="/createuser">
        <nav>New User</nav>
      </NavLink>
    </div>
  );
};

export default Header;
