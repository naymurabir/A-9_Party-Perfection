import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Team = () => {
    return (

        <div className="text-center my-5 md:my-5 lg:my-16">
            <div data-aos="flip-left">
                <h2 className="text-xl font-bold text-[#CE1446]">Team</h2>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 mb-5" >Our Executive Team</h1>
            </div>

            <div className="bg-white dark:bg-[#713F57] rounded-md">
                <div className="container px-6 py-8 mx-auto">
                    <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="w-full max-w-xs text-center">
                            <img
                                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                src="https://i.ibb.co/ySSQk7D/member1.jpg"
                                alt="avatar"
                            />

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                                    Naymur Rahman
                                </h3>
                                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                                    CEO
                                </span>
                            </div>
                        </div>

                        <div className="w-full max-w-xs text-center">
                            <img
                                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                src="https://i.ibb.co/gVJrbqF/member2.jpg"
                                alt="avatar"
                            />

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                                    Asif Imtiaz
                                </h3>
                                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                                    Co-founder
                                </span>
                            </div>
                        </div>

                        <div className="w-full max-w-xs text-center">
                            <img
                                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                src="https://i.ibb.co/jrWHC4f/member3.jpg"
                                alt="avatar"
                            />

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                                    Sinthiya Shikrity
                                </h3>
                                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                                    Event Manager
                                </span>
                            </div>
                        </div>

                        <div className="w-full max-w-xs text-center">
                            <img
                                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                src="https://i.ibb.co/fMzGKVz/member4.jpg"
                                alt="avatar"
                            />

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                                    Ahmed Tanvir
                                </h3>
                                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                                    Marketing Coordinator
                                </span>
                            </div>
                        </div>
                        <div className="w-full max-w-xs text-center">
                            <img
                                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                src="https://i.ibb.co/xspXqsS/member5.jpg"
                                alt="avatar"
                            />

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                                    Shekh Faysal
                                </h3>
                                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                                    Analytics and Insights Analyst
                                </span>
                            </div>
                        </div>
                        <div className="w-full max-w-xs text-center">
                            <img
                                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                src="https://i.ibb.co/wc29DGT/member6.jpg"
                                alt="avatar"
                            />

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                                    Monali Das
                                </h3>
                                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                                    Customer Support Specialist
                                </span>
                            </div>
                        </div>
                        <div className="w-full max-w-xs text-center">
                            <img
                                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                src="https://i.ibb.co/q5W33Cw/member7.jpg"
                                alt="avatar"
                            />

                            <div className="mt-2">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                                    Mohtasim Shahriar
                                </h3>
                                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                                    Community Moderator
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Team;