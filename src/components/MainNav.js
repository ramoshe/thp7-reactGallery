import { NavLink } from "react-router-dom";

const MainNav = () => 
    <nav className="main-nav">
        <ul> 
            <li><NavLink to="/cat">cat</NavLink></li>
            <li><NavLink to="/bird">bird</NavLink></li>
            <li><NavLink to="/dog">dog</NavLink></li>
        </ul>
    </nav>;

export default MainNav;