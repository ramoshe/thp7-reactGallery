import { NavLink } from "react-router-dom";

const MainNav = () => 
    <nav className="main-nav">
        <ul> 
            <li><NavLink to={`${process.env.PUBLIC_URL}/cat`}>cat</NavLink></li>
            <li><NavLink to={`${process.env.PUBLIC_URL}/bird`}>bird</NavLink></li>
            <li><NavLink to={`${process.env.PUBLIC_URL}/dog`}>dog</NavLink></li>
        </ul>
    </nav>;

export default MainNav;