import { useDispatch, useSelector } from "react-redux";
import CountryCard from "../component/CountryCard/CountryCard";
import FilterSection from "../component/FilterSection/FilterSection";
import { useEffect } from "react";
import { getData } from "../utils/fetcherAPI";
import { addCountry } from "../redux/countrySlice";
import "./HomePage.css"

function HomePage() {

    const dispatch = useDispatch();
    const countryData = useSelector(store => store.countrySlice.countryData);
    const colorSchema = useSelector(state => state.countrySlice.colorSchema)

    useEffect(() => {
        (async function () {
            const data = await getData("https://restcountries.com/v3.1/all");
            dispatch(addCountry(data))
        })()
    }, [dispatch])

    return (
        <div id="HomePage" style={{ backgroundColor: colorSchema.backGround }}>
            <FilterSection />
            <section id="CardsContainer">
                {
                    countryData?.map((countries, index) => {
                        return <CountryCard key={index} flags={countries.flags.png} name={countries.name.common} population={countries.population} region={countries.region} capital={countries.capital} />
                    })
                }
            </section>
        </div>
    );
}

export default HomePage;