import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
    const navItems = <>
        <li><AnchorLink href="#home" offset={() => 150} className="font-bold text-white active:text-[#3498db]">Home</AnchorLink></li>
        <li><AnchorLink href="#skills" offset={() => 100} className="font-bold text-white">Skills</AnchorLink></li>
        <li><AnchorLink href="#projects" offset={() => 100} className="font-bold text-white">Projects</AnchorLink></li>
        <li><AnchorLink href="#about" offset={() => 200} className="font-bold text-white">About</AnchorLink></li>
        <li><AnchorLink href="#contact" offset={() => 50} className="font-bold text-white">Contact</AnchorLink></li>
    </>

    return (
        <div className="navbar fixed bg-white text-black bg-opacity-20 top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Kazi Modasser</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <AnchorLink href="#contact" className="btn btn-sm bg-[#3498db] font-bold border-0 hover:bg-[#2980b9]">Hire Me</AnchorLink>
            </div>
        </div>
    );
};

export default Header;