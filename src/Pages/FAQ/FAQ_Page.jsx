
const FAQ_Page = () => {
    return (
        <div>
            <div className="text-center my-5 md:my-5 lg:my-10">
                <h2 className="text-xl font-bold text-[#CE1446]">Questions</h2>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800" >Frequently Ask Your Questions.</h1>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-md px-4 py-5 md:px-4 md:py-5 lg:px-5 lg:py-5 text-black">
                <div className="collapse collapse-plus mb-3 bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        What types of events do you specialize in?
                    </div>
                    <div className="collapse-content">
                        <p>We specialize in a wide range of social events, including weddings, birthday parties, anniversaries, engagement parties, retirement parties, and baby showers. Our experienced team can help you plan and execute these events seamlessly.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus mb-3 bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How do I get started with your event planning services?
                    </div>
                    <div className="collapse-content">
                        <p>To get started, simply fill out our contact form on our website or give us a call. We will schedule an initial consultation to discuss your events details, your vision, and your budget. From there, we will work closely with you to create a customized plan.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus mb-3 bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Do you offer different packages for event planning services?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we offer a range of packages to suit various budgets and needs. Whether you need full-service event planning or assistance with specific aspects, such as decor or coordination, we have a package that can accommodate your requirements.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus mb-3 bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        What sets your event planning team apart from others?
                    </div>
                    <div className="collapse-content">
                        <p>Our team is dedicated to creating unforgettable experiences tailored to your unique vision and preferences. We prioritize attention to detail, creativity, and personalized service. With years of experience in event management, we have the expertise to handle all aspects of your event.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How far in advance should I book your services for my event?
                    </div>
                    <div className="collapse-content">
                        <p>We recommend booking our services as early as possible, especially for popular event dates. Generally, booking 6-12 months in advance allows us to secure the best vendors and ensure a smooth planning process. However, we can also accommodate last-minute requests if our schedule permits.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ_Page;