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
                        ? <div>
                            <NavBtn>
                                <NavLink to="/profile">Profile</NavLink>
                            </NavBtn>
                            <NavBtn>
                                <span onClick={props.handleLogout} className="nav-link logout-link">Logout</span>
                            </NavBtn>
                        </div>
                        : <div>
                            <NavBtn>
                                <NavBtnLink to="/signup">Create Account</NavBtnLink>
                            </NavBtn>
                            <NavBtn>
                                <NavBtnLink to='/login'>Log In</NavBtnLink>
                            </NavBtn>
                        </div>
                }
            </Nav>
        </>
    );
};

export default Navbar;
