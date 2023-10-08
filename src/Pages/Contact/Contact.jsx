import { FcSms, FcHome, FcPhone } from 'react-icons/fc';


const Contact = () => {
    return (
        <div>
            <div className="bg-white dark:bg-gray-900 mt-4 md:mt-5 lg:mt-10">
                <div className="container px-6 py-5 mx-auto">
                    <div className="text-center">
                        <h1 className="mt-2  font-semibold text-gray-800 md:text-2xl dark:text-white">We would love to hear from you</h1>
                    </div>

                    <img className="object-cover w-full mt-2 md:mt-5 lg:mt-10 rounded-lg  h-40  md:h-[300px] lg:h-[450px]" src="https://i.ibb.co/48zRMGj/Team.jpg" alt="" />

                    <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2">
                        <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                <FcSms></FcSms>
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Chat to book us.</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Speak to our friendly team.</p>
                            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">hello@event-lab.com</p>
                        </div>

                        <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                <FcHome></FcHome>
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Visit us</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Visit our office HQ..</p>
                            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">100 Smith Street Collingwood VIC 3066 AU</p>
                        </div>

                        <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                <FcPhone></FcPhone>
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Call us</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Contact;