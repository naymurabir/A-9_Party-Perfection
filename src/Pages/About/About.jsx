import { FcAbout, FcNext } from 'react-icons/fc';



const About = () => {
    return (
        <div className="bg-white dark:bg-gray-800 mt-4 md:mt-5 lg:mt-10">

            <div className=" px-6 py-10 mx-auto">
                <h1 className="text-xl font-semibold text-gray-800 lg:text-3xl dark:text-white text-center">
                    Explore Our Event Lab & book now.
                </h1>

                <div className="grid grid-cols-1 gap-8 mt-4 md:mt-5 lg:mt-8 xl:mt-12 md:grid-cols-2 xl:grid-cols-3">
                    <div className="px-4 py-3 md:px-5 md:py-5 lg:px-6 lg:py-4- space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                        <span className="inline-block text-blue-500 dark:text-blue-400">
                            <FcAbout className='text-2xl md:text-3xl'></FcAbout>
                        </span>

                        <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                            About Event Lab - Crafting Memorable Moments
                        </h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            At Event Lab, we craft unforgettable moments. With expertise in weddings, birthdays, anniversaries, engagements etc. we make dreams come true.
                        </p>
                        <FcNext className='text-2xl md:text-3xl'></FcNext>
                    </div>

                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                        <span className="inline-block text-blue-500 dark:text-blue-400">
                            <FcAbout className='text-2xl md:text-3xl'></FcAbout>
                        </span>

                        <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                            Personalized Event Experiences
                        </h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            Discover our journey from inspiration to celebration. We are dedicated to making milestones unforgettable.
                        </p>

                        <FcNext className='text-2xl md:text-3xl'></FcNext>
                    </div>

                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                        <span className="inline-block text-blue-500 dark:text-blue-400">
                            <FcAbout className='text-2xl md:text-3xl'></FcAbout>
                        </span>

                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                            From Inspiration to Celebration
                        </h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            Our approach is all about personalization. Your vision, your style. Learn how we make your event uniquely yours.
                        </p>

                        <FcNext className='text-2xl md:text-3xl'></FcNext>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;