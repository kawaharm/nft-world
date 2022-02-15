import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarStyle';

const Navbar = (props) => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <h1 className="nav-logo">NFT World</h1>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/markets' activeStyle>
                        Markets
                    </NavLink>
                    <NavLink to='/rankings' activeStyle>
                        Rankings
                    </NavLink>
                    <NavLink to='/team' activeStyle>
                        About
                    </NavLink>
                </NavMenu>
                {
                    props.isAuth
                        ? <NavMenu>
                            <NavLink to="/profile">
                                Profile
                            </NavLink>
                            <NavLink>
                                <span onClick={props.handleLogout}>Logout</span>
                            </NavLink>
                        </NavMenu>
                        :
                        <NavMenu>
                            <NavLink to="/signup">
                                Sign Up
                            </NavLink>
                            <NavLink to="/login">
                                Login
                            </NavLink>
                        </NavMenu>
                }
            </Nav>
        </>
    );
};

export default Navbar;
