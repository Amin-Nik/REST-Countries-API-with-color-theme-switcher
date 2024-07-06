import CountryCard from "../CountryCard/CountryCard";
import { getData } from '../../utils/fetcherAPI';
import { useState, useEffect } from "react";
import "./FilterSection.css"

function FilterSection() {

    const [countryData, setCountryData] = useState([]);
    const [showData, setShowData] = useState([]);
    useEffect(() => {
        (async function () {
            const data = await getData("https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital");
            setCountryData(data);
            setShowData(data);
        })()
    }, [])

    const dropDownChangeHandler = (e) => {
        if (e.target.value == "All") {
            return setShowData(countryData);
        }
        const data = countryData.filter(country => country.region == e.target.value);
        setShowData(data);
    }

    const searchHandler = (e) => {
        const data = countryData.filter(country => country.name.common.toLowerCase().startsWith(e.target.value));
        setShowData(data);
    }

    return (
        <>
            <section id="FilterSection">
                <input onChange={searchHandler} type="search" placeholder="Search for a country..." />

                <select onChange={dropDownChangeHandler} defaultValue={""}>
                    <option value="All" hidden>Filter by Region</option>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </section>

            <section id="CardsContainer">
                {
                    showData?.map((countries, index) => {
                        return <CountryCard key={index} flags={countries.flags.png} name={countries.name.common} population={countries.population} region={countries.region} capital={countries.capital} />
                    })
                }
            </section>
        </>
    );
}

export default FilterSection;