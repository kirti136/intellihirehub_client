import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { Link } from "react-router-dom";
import { GiDodge } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

function Navbar() {
  const [active, setActive] = useState("navBar");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const closeNav = () => {
    setActive("navBar");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <section className="navbarSection">
      {role == "job seeker" ? (
        <header className="header flex">
          <div className="logoDiv">
            <Link to={"/"} className="logo flex a">
              <h1>
                <GiDodge className="icon" />
                ntelliHireHub.
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
                  Job Applications
                </Link>
              </li>
              <li className="navItem">
                <Link to={"/"} className="navLink a">
                  Apply
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
                <Link to={"/profile"} className="navLink a">
                  Profile
                </Link>
              </li>

              {token != null ? (
                // Logout button if token is present
                <li className="navItem">
                  <button onClick={handleLogout} className="btn">
                    <Link to={"/login"} className="a">
                      LOGOUT
                    </Link>
                  </button>
                </li>
              ) : (
                // Register button if token is not present
                <li className="navItem">
                  <button className="btn">
                    <Link to={"/register"} className="a">
                      REGISTER
                    </Link>
                  </button>
                </li>
              )}
            </ul>

            <div onClick={closeNav} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
        </header>
      ) : (
        <header className="header flex">
          <div className="logoDiv">
            <Link to={"/"} className="logo flex a">
              <h1>
                <GiDodge className="icon" />
                ntelliHireHub.
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
                <Link to={"/create_job"} className="navLink a">
                  Create
                </Link>
              </li>
              <li className="navItem">
                <Link to={"/individual_job_posts"} className="navLink a">
                  My Postings
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
                <Link to={"/profile"} className="navLink a">
                  Profile
                </Link>
              </li>

              {token != null ? (
                // Logout button if token is present
                <li className="navItem">
                  <button onClick={handleLogout} className="btn">
                    <Link to={"/login"} className="a">
                      LOGOUT
                    </Link>
                  </button>
                </li>
              ) : (
                // Register button if token is not present
                <li className="navItem">
                  <button className="btn">
                    <Link to={"/register"} className="a">
                      REGISTER
                    </Link>
                  </button>
                </li>
              )}
            </ul>

            <div onClick={closeNav} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
        </header>
      )}
    </section>
  );
}

export default Navbar;
