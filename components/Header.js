import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ".././node_modules/nprogress/nprogress.css";
import Search from "./blog/Search";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Navbar
        className='navbar navbar-dark bg-dark fixed-top mb-5'
        expand='lg'
        bg='dark'
        variant='dark'
      >
        <Link href='/'>
          <NavLink className='font-weight-bold neo-menu'>{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <React.Fragment>
              <NavItem>
                <Link href={`/`}>
                  <NavLink className='neo-menu'>Home</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link href={`/about`}>
                  <NavLink className='neo-menu'>About</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link href={`/contact`}>
                  <NavLink className='neo-menu'>Contact</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>

            {/* {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link href='/signin'>
                    <NavLink>Signin</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/signup'>
                    <NavLink>Signup</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )} */}

            {/* {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href='/user'>
                  <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )} */}

            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href='/admin'>
                  <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => Router.replace(`/signin`))}
                >
                  Signout
                </NavLink>
              </NavItem>
            )}

            {/* <NavItem>
                <a href='/user/crud/blog' className="btn- btn-primary text-light">
                  Write a blog
                </a>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
      <div className='row ' style={{ marginTop: "56px" }}>
        <Link href={`/`}>
          <a>
            <img
              className='img img-fluid featured-image'
              src='https://onurtaskiran.net/static/images/onur-taskiran-banner.jpg'
              width='100%'
              height='100%'
              alt='onurtaskiran.net'
            />
          </a>
        </Link>
      </div>
      <Search />
    </React.Fragment>
  );
};

export default Header;
