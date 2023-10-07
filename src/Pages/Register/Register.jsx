import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        // const termsAccepted = form.get('termsAccepted');
        const termsAccepted = e.target.terms.checked
        console.log(name, photo, email, password, termsAccepted);

        if (password.length < 6) {
            toast("Password must be 6 characters long.")
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            toast("Password must have at least one Upper case letter.")
            return;
        }
        else if (!/[@#$%^&+=!]/.test(password)) {
            toast("Password must have a special character.");
            return;
        }
        else if (!termsAccepted) {
            toast("Please accept our terms and conditions before register.");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                toast("User has been registered successfully.")
                e.target.reset()
            })
            .catch(error => {
                console.log("Error", error.message);
                toast(error.message)
            })


    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <h2 className="font-bold text-center text-[#CE1446] text-xl mt-3 md:mt-5">Register your account</h2>

                <div className=" md:w-3/4 lg:w-1/2 mx-auto px-3 md:px-5 py-2 md:py-5 my-3 md:my-5 shadow-lg ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold"> Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Input your name..."
                            className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold"> Photo url</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Input your photo url..."
                            className="input input-bordered" />
                    </div>

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

                        <div className="flex gap-2 items-center mt-2">
                            <input type="checkbox" name="terms" id="" />
                            <label className="text-sm font-semibold" htmlFor="terms"> Terms and Conditions. </label>
                        </div>

                    </div>

                    <div className="form-control mt-2">
                        <button className="bg-[#CE1446] text-white px-2 py-1 rounded">Register</button>
                    </div>

                    <div className="text-center mt-2">
                        <p>Already have an Account? <Link to="/login" className="text-[#CE1446] font-semibold" >Login</Link> </p>
                    </div>
                </div>
                <ToastContainer></ToastContainer>

            </form>
        </div>

    );
};

export default Register;