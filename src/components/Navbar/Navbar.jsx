import  { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { GiDodge } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

function Navbar() {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const closeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to={"/"} className="logo flex a">
            <h1>
              <GiDodge className="icon" />ntelliHireHub.
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to={"/"} className="navLink a">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to={"/"} className="navLink a">
                Packages
              </Link>
            </li>
            <li className="navItem">
              <Link to={"/"} className="navLink a">
                Shop
              </Link>
            </li>
            <li className="navItem">
              <Link to={"/"} className="navLink a">
                About
              </Link>
            </li>
            <li className="navItem">
              <Link to={"/"} className="navLink a">
                Pages
              </Link>
            </li>
            <li className="navItem">
              <Link to={"/"} className="navLink a">
                News
              </Link>
            </li>
            <li className="navItem">
              <Link to={"/"} className="navLink a">
                Contact
              </Link>
            </li>

            <button className="btn">
              <Link to={"/register"} className="a">
                REGISTER
              </Link>
            </button>
          </ul>

          <div onClick={closeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
}

export default Navbar;
