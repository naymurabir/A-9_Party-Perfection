import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userImg from '../../../assets/user.png'


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast("Logout Successful")
            })
            .catch(error => {
                console.log();
                toast(error.message)
            })
    }


    const navLinks = <>
        <NavLink className="text-lg mr-3 text-gray-800" to="/">HOME</NavLink>

        <NavLink className="text-lg mr-3 text-gray-800" to="/about">ABOUT</NavLink>

        <NavLink className="text-lg mr-3 text-gray-800" to="/blog">BLOG</NavLink>

        <NavLink className="text-lg text-gray-800" to="/contact">CONTACT</NavLink>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-40">
                        {navLinks}
                    </ul>
                </div>
                <img className="hidden md:block" src="https://i.ibb.co/xmWVn07/logo.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                <div className="flex items-center gap-2">

                    {
                        user ? <div className="flex gap-2">
                            <div className="flex items-center gap-4"> <h2 className="text-sm font-semibold">{user.displayName}</h2> <img className="w-10 rounded-full" src={user.photoURL} alt="" /> </div>

                            <button onClick={handleLogOut} className="bg-[#CE1446] text-white font-semibold px-4 py-2 rounded hover:bg-rose-400">Log Out</button>
                        </div>
                            :
                            <div className="flex items-center gap-2">
                                <label >
                                    <div className="w-10 rounded-full">
                                        <img src={userImg} />
                                    </div>
                                </label>

                                <Link to="/login">
                                    <button className="bg-[#CE1446] text-white font-semibold px-4 py-2 rounded hover:bg-rose-400">Login</button>
                                </Link>
                            </div>

                    }

                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Navbar;

{/* <div className="navbar-end">
                <Link to="/login">
                    <button className="bg-[#CE1446] text-white font-semibold px-4 py-2 rounded hover:bg-rose-400">Login</button>
                </Link>
            </div> */}