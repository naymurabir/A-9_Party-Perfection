
const Banner = () => {
    return (

        <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/JtbVjdM/Concert.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-white text-3xl font-normal">Unforgettable Moments, Exceptional Events. Discover the Magic of <span className="text-orange-500 font-bold text-5xl">Party Perfection</span></h1>

                </div>
            </div>
        </div>
    );
};

export default Banner;