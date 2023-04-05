import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to="/test-app/index.html">Home</NavLink>
      <NavLink to="/test-app/products">Shop</NavLink>
      <NavLink to="/test-app/user">Profile</NavLink>
    </>
  );
};

export default Navbar;
