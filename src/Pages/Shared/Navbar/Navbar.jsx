import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <NavLink className="text-lg font-bold mr-4 text-white" to="/">Home</NavLink>

        <NavLink className="text-lg font-bold text-white" to="/">Services</NavLink>
    </>

    return (
        <div className="navbar justify-between fixed md:w-[88%] lg:w-[80%] z-10 px-8">
            <div className="flex justify-between">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-black rounded w-32">
                        {navLinks}
                    </ul>
                </div>

                <h2 className="text-2xl text-white font-semibold hidden lg:block mr-">Party Perfection</h2>
                <img className="w-16 h-[60px] hidden lg:block" src="https://i.ibb.co/w7QNwZT/Logo.png" alt="" />
            </div>

            <div className="navbar-center hidden  mr-20 lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="">
                <button className="bg-orange-400 text-white px-4 py-1 rounded font-semibold">Log In</button>
            </div>
        </div>
    );
};

export default Navbar;