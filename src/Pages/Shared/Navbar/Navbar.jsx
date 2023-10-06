import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <NavLink className="text-lg font-semibold mr-3" to="/">Home</NavLink>

        <NavLink className="text-lg font-semibold" to="/">Services</NavLink>
    </>

    return (

        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="w-40 hidden lg:block" src="https://i.ibb.co/P5nbpJF/Party-Perfection.gif" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="bg-rose-600 text-white px-4 py-2 rounded font-semibold">Log Out</button>
            </div>
        </div>
    );
};

export default Navbar;