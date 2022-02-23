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
                    <NavLink to='/' >
                        Home
                    </NavLink>
                    <NavLink to='/markets' >
                        Markets
                    </NavLink>
                    <NavLink to='/rankings' >
                        Rankings
                    </NavLink>
                    <NavLink to='/team' >
                        About
                    </NavLink>
                </NavMenu>
                {
                    props.isAuth
                        ?
                        <NavMenu>
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
