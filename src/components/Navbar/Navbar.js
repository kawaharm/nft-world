import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = (props) => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/events' activeStyle>
                        Events
                    </NavLink>
                    <NavLink to='/annual' activeStyle>
                        Annual Report
                    </NavLink>
                    <NavLink to='/team' activeStyle>
                        Teams
                    </NavLink>
                    <NavLink to='/blogs' activeStyle>
                        Blogs
                    </NavLink>
                    <NavLink to='/signup' activeStyle>
                        Sign Up
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/login'>Sign In</NavBtnLink> */}
                </NavMenu>
                {/* <NavBtn> */}
                {/* <NavLink to='/login'>Log In</NavLink> */}
                {/* </NavBtn> */}
                {
                    props.isAuth
                        ? <div>
                            <NavBtn>
                                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                            </NavBtn>
                            <NavBtn>
                                <span onClick={props.handleLogout} className="nav-link logout-link">Logout</span>
                            </NavBtn>
                        </div>
                        : <div>
                            <NavBtn>
                                <NavBtnLink className="nav-link" to="/signup">Create Account</NavBtnLink>
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
