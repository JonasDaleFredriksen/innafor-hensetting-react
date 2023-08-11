import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.svg";
import "./Layout.css";

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <nav id="navbar">
        <div id="container">
          <Link to="/">
            <img src={logo} className="logo" alt="Logo" />
          </Link>
          <div>
            <NavLink to="/reservations" className="links">
              Reservasjoner
            </NavLink>
            <NavLink to="/reservations/create" className="links">
              Reserver
            </NavLink>
          </div>
          <p id="velkommen">Logget inn som: Vy Vest</p>
        </div>
      </nav>
      {props.children}
    </>
  );
}
