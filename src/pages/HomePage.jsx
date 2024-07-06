import CountryCard from "../component/CountryCard/CountryCard";
import { getData } from '../utils/fetcherAPI';
import { useState, useEffect } from "react";
import './HomePage.css';

function HomePage() {

    const [countryData, setCountryData] = useState([]);
    useEffect(() => {
        (async function () {
            const data = await getData("https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital");
            setCountryData(data);
        })()
    }, [])

    return (
        <>
            <section id="CardsContainer">
                {
                    countryData?.map((countries, index) => {
                        return <CountryCard key={index} flags={countries.flags.png} name={countries.name.common} population={countries.population} region={countries.region} capital={countries.capital} />
                    })
                }
            </section>
        </>
    );
}

export default HomePage;