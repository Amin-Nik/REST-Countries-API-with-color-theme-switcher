import { useDispatch } from 'react-redux';
import { SearchCountry, filterByRegion } from "../../redux/countrySlice";
import "./FilterSection.css"

function FilterSection() {

    const dispatch = useDispatch();

    const dropDownChangeHandler = (e) => {
        dispatch(filterByRegion(e.target.value));
    }

    const searchHandler = (e) => {
        dispatch(SearchCountry(e.target.value));
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
        </>
    );
}

export default FilterSection;