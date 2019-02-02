import Router from "next/router";
import NProgress from "nprogress";
import Link from "next/link";
import Icon from "../icons";

import "./Nav.scss";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Nav = () => (
  <header className="top-nav__header">
    <div className="top-nav__logo-container">
      <Link href="/">
        <a className="top-nav__logo">
          <img
            src="https://res.cloudinary.com/dk9vbfmw6/image/upload/v1549146635/circlegps-logo-nobg.png"
            alt="Logo"
            class="top-nav__logo-image"
          />
        </a>
      </Link>
    </div>
    <nav className="user-nav">
      <Link to="/add-device">
        <a className="user-nav__icon-box">
          <Icon className="user-nav__icon" name="cog" />
          <span className="user-nav__label">Settings</span>
        </a>
      </Link>
      <Link to="/">
        <a className="user-nav__icon-box">
          <Icon className="user-nav__icon" name="exit" />
          <span className="user-nav__label">Logout</span>
        </a>
      </Link>
    </nav>
  </header>
);

export default Nav;
