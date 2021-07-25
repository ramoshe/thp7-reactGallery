import { NavLink } from "react-router-dom";

const MainNav = () => 
    <nav className="main-nav">
        <ul>
            <li><NavLink to='/love'>Love</NavLink></li>
            <li><NavLink to='/light'>Light</NavLink></li>
            <li><NavLink to='/joy'>Joy</NavLink></li>
        </ul>
    </nav>;

export default MainNav;