import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

const Header = () => {

    const { toggleDarkMode} = useContext(ThemeContext)

    const navItems = <>
        <li><a>Home</a></li>
        <li><Link>About</Link></li>
        <li><a>Item 3</a></li>
    </>

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Kazi Modasser Hossain</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn" onClick={toggleDarkMode}>Button</a>
            </div>
        </div>
    );
};

export default Header;