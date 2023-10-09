import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Banner = () => {
    return (

        <div className="hero h-[220px] md:h-[350px] lg:h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/s6WZWsB/Banner3.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 bg-black-600 "></div>
            <div className="hero-content text-center text-neutral-content">


                <div className="max-w-2xl">

                    <div data-aos="zoom-in" data-aos-duration="1500">
                        <h1 className="mb-5 text-white text-xl md:text-2xl lg:text-4xl font-semibold"> <span className="text-[#CE1446] font-bold text-2xl md:text-4xl  lg:text-6xl">Event Lab:</span> <br /> Where Dreams Become Events.</h1>
                    </div>

                    <div>
                        <button className="text-white bg-[#CE1446] px-3 md:px-6 py-1 md:py-2 mr-5 rounded-md font-bold hover:bg-rose-400">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;