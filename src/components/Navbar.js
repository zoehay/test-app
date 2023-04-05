import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to="/test-app">Home</NavLink>
      <NavLink to="/test-app/products">Shop</NavLink>
    </>
  );
};

export default Navbar;
