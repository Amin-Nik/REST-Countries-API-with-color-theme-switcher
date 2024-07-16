import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import TheButton from '../../component/TheButton/TheButton';
import "./CountryPage.css"

function CountryPage() {
    const countrySlice = useSelector(state => state.countrySlice.originalCountryData);
    const colorSchema = useSelector(state => state.countrySlice.colorSchema);
    const location = useLocation();

    const thisCountryName = location.pathname.slice(1).replace("REST-Countries-API-with-color-theme-switcher/", "").replaceAll("-", " ");
    const [thisCountry] = countrySlice.filter(country => country.name.common == thisCountryName);

    return (
        thisCountry ?
            <>
                <section id="CountryPage" style={{ backgroundColor: colorSchema.backGround, color: colorSchema.textColor }}>
                    <div id='imgbtn'>
                        <TheButton text="Back" navigateTo="/REST-Countries-API-with-color-theme-switcher" />
                        <img src={thisCountry.flags.png} alt="Country Flag" />
                    </div>
                    <section id="CountryDetails">
                        <div className="Details">
                            <h1>{thisCountry.name.common}</h1>
                            <p>Native Name: {Object.values(thisCountry.name.nativeName)[0].common}</p>
                            <p>Population: {thisCountry.population}</p>
                            <p>Region: {thisCountry.region}</p>
                            <p>Sub Region: {thisCountry.subregion}</p>
                            <p>Capital: {thisCountry.capital[0]}</p>
                        </div>
                        <div className="Details">
                            <p>Top Level Domain: {thisCountry.tld[0]}</p>
                            <p>Currencies: {Object.values(thisCountry.currencies)[0].name}</p>
                            <p>Languages: {Object.values(thisCountry.languages).join(", ")}</p>
                        </div>
                        <div id="borders">
                            <p>Border Counteries: </p>
                            {
                                thisCountry.borders?.map((cca3, inedx) => {
                                    const borderCountry = countrySlice?.filter(country => country.cca3 == cca3);
                                    const countryName = borderCountry[0].name.common;
                                    return <TheButton key={inedx} text={countryName} navigateTo={"/REST-Countries-API-with-color-theme-switcher/" + countryName.replaceAll(' ', '-')} />
                                })
                            }
                        </div>
                    </section>
                </section>
            </>
            : <> </>
    );
}

export default CountryPage;