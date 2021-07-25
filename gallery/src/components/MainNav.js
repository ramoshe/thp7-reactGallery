import { NavLink } from "react-router-dom";

const MainNav = () => 
    <nav className="main-nav">
        <ul>
            <li><NavLink to='/calm'>Calm</NavLink></li>
            <li><NavLink to='/light'>Light</NavLink></li>
            <li><NavLink to='/bliss'>Bliss</NavLink></li>
        </ul>
    </nav>;

export default MainNav;