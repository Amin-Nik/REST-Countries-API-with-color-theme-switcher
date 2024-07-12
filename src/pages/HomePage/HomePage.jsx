import CountryCard from "../../component/CountryCard/CountryCard";
import FilterSection from "../../component/FilterSection/FilterSection";
import { useSelector } from "react-redux";
import "./HomePage.css"

function HomePage() {
    const countryData = useSelector(store => store.countrySlice.countryData);
    const colorSchema = useSelector(state => state.countrySlice.colorSchema);

    return (
        <div id="HomePage" style={{ backgroundColor: colorSchema.backGround }}>
            <FilterSection />
            <section id="CardsContainer">
                {
                    countryData?.map((countries, index) => {
                        return <CountryCard key={index} countryId={countries.name.common.replaceAll(' ', '-')} flags={countries.flags.png} name={countries.name.common} population={countries.population} region={countries.region} capital={countries.capital} />
                    })
                }
            </section>
        </div>
    );
}

export default HomePage;