import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-gray-800 text-base-content rounded mt-10">
            <nav className="grid grid-flow-col gap-4">
                <Link to="/about">
                    <h2 className="link link-hover text-white text-base font-semibold">About</h2>
                </Link>
                <Link to="/contact">
                    <h2 className="link link-hover text-white text-base font-semibold">Contact</h2>
                </Link>
                <Link to="/blog">
                    <h2 className="link link-hover text-white text-base font-semibold">Blog</h2>
                </Link>
                <Link to="/">
                    <h2 className="link link-hover text-white text-base font-semibold">Services</h2>
                </Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link>
                        <FaTwitter className='text-2xl text-[#1A98E8]'></FaTwitter>
                    </Link>
                    <Link>
                        <FaFacebook className='text-2xl text-blue-800'></FaFacebook>
                    </Link>
                    <Link>
                        <FaYoutube className='text-2xl text-red-700'></FaYoutube>
                    </Link>
                </div>
            </nav>
            <aside>
                <p className="text-white">Copyright © 2023 - All right reserved by Event Lab</p>
            </aside>
        </footer>
    );
};

export default Footer;