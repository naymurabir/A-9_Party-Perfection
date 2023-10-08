
const Blog = () => {

    return (
        <div className="bg-white dark:bg-gray-900 mt-10">
            <div className="container px-6 py-10 mx-auto">
                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    <div className="lg:flex">
                        <img
                            className="object-cover w-full h-56 rounded-lg lg:w-64"
                            src="https://i.ibb.co/NC01DRb/Weedding.jpg"
                            alt=""
                        />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <h2

                                className="text-xl font-semibold text-gray-800 dark:text-white"
                            >
                                The Ultimate Guide to Planning a Dream Wedding: Tips and Trends
                            </h2>

                            <span className="text-sm text-gray-500 dark:text-gray-300">
                                On: 20 October 2019
                            </span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img
                            className="object-cover w-full h-56 rounded-lg lg:w-64"
                            src="https://i.ibb.co/ZHCWJGH/Birthday.jpg"
                            alt=""
                        />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <h2
                                className="text-xl font-semibold text-gray-800 dark:text-white"
                            >
                                Turning One in Style: How to Throw the Perfect Birthday Party
                            </h2>

                            <span className="text-sm text-gray-500 dark:text-gray-300">
                                On: 20 October 2019
                            </span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img
                            className="object-cover w-full h-56 rounded-lg lg:w-64"
                            src="https://i.ibb.co/Rpy34QM/Anniversaries.jpg"
                            alt=""
                        />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <h2

                                className="text-xl font-semibold text-gray-800 dark:text-white"
                            >
                                Celebrating Love and Milestones: Planning Memorable Anniversaries
                            </h2>

                            <span className="text-sm text-gray-500 dark:text-gray-300">
                                On: 25 November 2020
                            </span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img
                            className="object-cover w-full h-56 rounded-lg lg:w-64"
                            src="https://i.ibb.co/m9CH8mn/Engagement.jpg"
                            alt=""
                        />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <h2
                                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
                            >
                                He Said Yes! How to Plan a Stunning Engagement Party
                            </h2>

                            <span className="text-sm text-gray-500 dark:text-gray-300">
                                On: 30 September 2020
                            </span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img
                            className="object-cover w-full h-56 rounded-lg lg:w-64"
                            src="https://i.ibb.co/nQjrfRB/Retirement.jpg"
                            alt=""
                        />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <h2
                                className="text-xl font-semibold text-gray-800 dark:text-white"
                            >
                                Retirement Party Planning Checklist: A Step-by-Step Guide
                            </h2>

                            <span className="text-sm text-gray-500 dark:text-gray-300">
                                On: 13 October 2019
                            </span>
                        </div>
                    </div>

                    <div className="lg:flex">
                        <img
                            className="object-cover w-full h-56 rounded-lg lg:w-64"
                            src="https://i.ibb.co/nCHQgw9/Baby-Shower.jpg"
                            alt=""
                        />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <h2
                                className="text-xl font-semibold text-gray-800 dark:text-white"
                            >
                                Welcoming a New Arrival: Hosting the Perfect Baby Shower
                            </h2>

                            <span className="text-sm text-gray-500 dark:text-gray-300">
                                On: 20 October 2019
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;