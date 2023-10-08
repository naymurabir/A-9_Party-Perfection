import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServicesHome from "./ServicesHome";
import Team from "../Team/Team";
import FAQ_Page from "../FAQ/FAQ_Page";


const Home = () => {

    const services = useLoaderData()

    return (
        <div >
            <Banner></Banner>

            <div className="text-center my-5 md:my-5 lg:my-10">
                <h2 className="text-xl font-bold text-[#CE1446]">Services</h2>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800" >POPULAR SERVICES</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    services.map(service => <ServicesHome key={service.id} service={service}></ServicesHome>)
                }
            </div>

            <Team> </Team>
            <FAQ_Page></FAQ_Page>

        </div>
    );
};

export default Home;