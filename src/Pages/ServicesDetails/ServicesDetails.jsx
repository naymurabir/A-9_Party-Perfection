import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { FaCheck } from 'react-icons/fa';

const ServicesDetails = () => {

    const [featureImg, setFeatureImg] = useState('')
    const serviceDetails = useLoaderData()

    const navigate = useNavigate()
    const handleGoHome = () => {
        navigate('/')
    }

    const { id } = useParams()
    const idInt = parseInt(id)

    const serviceDetail = serviceDetails.find(serviceDetail => serviceDetail.id === idInt)

    const { thumbnail, title, price, description, images, event_types } = serviceDetail


    return (

        <div className="flex flex-col lg:flex-row justify-between gap-10 my-2 md:my-5 lg:my-10">
            <div className="lg:w-[60%]">
                <img className="w-full h-[200px] md:h-[350px] lg:h-[400px] rounded" src={featureImg ? featureImg : thumbnail} alt="" />

                <div className="flex  mt-2 md:mt-5 gap-2 md:gap-4">
                    {
                        images.map((image, idx) => <div onClick={() => setFeatureImg(image.image)} key={idx}>
                            <img className="w-32  h-[50px] md:h-[85px] rounded" src={image.image} alt="" />
                        </div>)
                    }
                </div>
            </div>

            <div className="lg:w-[40%]">
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-rose-600'>{title}</h2>

                <p className='text-sm text-gray-800 mt-3 text-justify font-semibold'>{description}</p>

                <h3 className='text-lg font-semibold flex items-center mt-2'> Expense: <span className='text-[#CE1446] font-bold text-base md:text-xl ml-2'> {price} </span></h3>

                <div className="space-y-1">

                    <h3 className="text-rose-600 font-semibold   text-lg md:text-xl 
                    mt-3">Events Types: </h3>

                    {
                        event_types.map((event, index) => <div className="flex items-center gap-2" key={index}> <FaCheck className="text-green-700 font-semibold md:font-bold"></FaCheck>
                            <h2 className="font-semibold text-sm md:text-base"> {event} </h2>
                        </div>)
                    }

                    <div className="pt-4">
                        <button onClick={handleGoHome} className='text-white font-semibold bg-[#CE1446] px-4 py-1 rounded hover:bg-rose-400'>Go Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;