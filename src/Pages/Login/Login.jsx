import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const { signInUser, googleLogin, githubLogin } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const location = useLocation()
    const navigate = useNavigate()


    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const user = result.user
                navigate(location?.state ? location.state : '/')
                console.log(user);
                toast("User logged in successfully.")
                e.target.reset()
            })
            .catch(error => {
                console.log("Error", error.message);
                toast("Your email / password invalid.")
            })
    }

    const handleGoogleLogIn = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user
                navigate(location?.state ? location.state : '/')
                console.log(user);
                toast("User logged in successfully.")
            })
            .catch(error => {
                console.log("Error", error.message);
                toast(error.message)
            })
    }

    const handleGithubLogin = () => {
        githubLogin(githubProvider)
            .then(result => {
                const user = result.user
                navigate(location?.state ? location.state : '/')
                console.log(user);
                toast("User logged in successfully.")
            })
            .catch(error => {
                console.log("Error", error.message);
                toast(error.message)
            })
    }


    return (
        <div>
            <form onSubmit={handleLogin}>
                <h2 className="text-center text-[#CE1446] text-xl mt-3 md:mt-5 font-bold">Login your account</h2>

                <div className=" md:w-3/4 lg:w-1/2 mx-auto px-3 md:px-5 py-2 md:py-5 my-3 md:my-5 shadow-lg ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Input your email..."
                            className="input input-bordered"
                            required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Input your password..."
                            className="input input-bordered"
                            required />
                    </div>

                    <div className="form-control mt-2">
                        <button className="bg-[#CE1446] text-white px-2 py-1 rounded hover:bg-rose-400">Login</button>
                    </div>

                    <div className="flex justify-center ">
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-base">Forgot password?</a>
                        </label>
                    </div>

                    <div className="flex justify-between flex-col md:flex-row md:gap-2">
                        <button onClick={handleGoogleLogIn} className="flex items-center justify-center mt-2 transform border rounded-lg dark:border-gray-700">
                            <div className="px-4 py-2">
                                <FcGoogle className="w-6 h-6"></FcGoogle>
                            </div>

                            <span className="w-5/6 px-4 py-3 font-bold text-center text-rose-600">Sign in with Google</span>
                        </button>
                        <button onClick={handleGithubLogin} className="flex items-center justify-center mt-2 transform border rounded-lg dark:border-gray-700">
                            <div className="px-4 py-2">
                                <FaGithub className="w-6 h-6"></FaGithub>
                            </div>

                            <span className="w-5/6 px-4 py-3 font-bold text-center text-rose-600 ">Sign in with Github</span>
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <p>Do not have Account? <Link className="text-rose-600 font-semibold" to="/register">Register</Link> </p>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </form>


        </div>
    );
};

export default Login;