import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavigationComponents";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/register" activeStyle>
                        Register
                    </NavLink>
                    <NavLink to="/signin" activeStyle>
                        Sign In
                    </NavLink>
                    <NavLink to="/myfiles" activeStyle>
                        My Files
                    </NavLink>
                    <NavLink to="/profile" activeStyle>
                        Profile
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;