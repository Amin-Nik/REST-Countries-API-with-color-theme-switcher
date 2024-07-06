import "./CountryCard.css"

function CountryCard({ flags, name, population, region, capital }) {

    return (
        <>
            <section id="Card">
                <img src={flags} alt="flag" />
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