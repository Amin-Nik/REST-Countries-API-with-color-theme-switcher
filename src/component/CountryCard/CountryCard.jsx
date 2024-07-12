import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./CountryCard.css"

function CountryCard({ flags, name, population, region, capital, countryId }) {

    const colorSchema = useSelector(state => state.countrySlice.colorSchema)
    const navigate = useNavigate();
    const navigateHandler = () => { navigate(`${countryId}`) };

    return (
        <>
            <section onClick={navigateHandler} id="Card" style={{ backgroundColor: colorSchema.elementBackGround, color: colorSchema.textColor }}>
                <img src={flags} alt="Country Flag" />
                <div id="Details">
                    <h3 id="CardName">{name}</h3>
                    <p className="CardDetails">population: {population}</p>
                    <p className="CardDetails">region: {region}</p>
                    <p className="CardDetails">capital: {capital}</p>
                </div>
            </section>
        </>
    );
}

export default CountryCard;