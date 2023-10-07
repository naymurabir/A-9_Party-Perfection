import PropTypes from 'prop-types';


const ServicesHome = ({ service }) => {

    const { thumbnail, title, price, description } = service

    return (

        <div className="card card-compact shadow-xl">
            <img className='w-full h-[200px] object-cover ' src={thumbnail} alt="Event" />
            <div className="card-body bg-[#EBF6E2]">
                <h2 className='text-xl font-bold text-gray-800'>{title}</h2>
                <p className='text-sm text-gray-800'>{description}</p>

                <h3 className='text-lg font-semibold flex'> Expense: <span className='text-[#CE1446] font-bold text-xl ml-2'> {price} </span></h3>
                <button className='text-white font-semibold bg-[#CE1446] px-4 py-2 rounded hover:bg-rose-400'>Book Now</button>
            </div>
        </div>
    );
};

ServicesHome.propTypes = {
    service: PropTypes.object.isRequired
}

export default ServicesHome;