import Router from "next/router";
import NProgress from "nprogress";
import Link from "next/link";
import Icon from "../icons";

import "./Nav.scss";

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  console.log("nprogress");
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // NProgress.done();
};

Router.onRouteChangeError = () => {
  // NProgress.done();
};

const Nav = () => (
  <header className="top-nav__header">
    <div className="top-nav__logo-container">
      <Link href="/">
        <a className="top-nav__logo">
          <img
            src="https://res.cloudinary.com/dk9vbfmw6/image/upload/v1549146635/circlegps-logo-nobg.png"
            alt="Logo"
            className="top-nav__logo-image"
          />
        </a>
      </Link>
    </div>
    <nav className="user-nav">
      <Link href="/settings">
        <a className="user-nav__icon-box">
          <Icon className="user-nav__icon" name="cog" />
          <span className="user-nav__label">Settings</span>
        </a>
      </Link>
      <Link href="/">
        <a className="user-nav__icon-box">
          <Icon className="user-nav__icon" name="exit" />
          <span className="user-nav__label">Logout</span>
        </a>
      </Link>
    </nav>
  </header>
);

export default Nav;
