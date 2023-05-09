import { useState, useEffect, useRef } from 'react';
import { getLocation } from './Location';

const RestaurantSearch = () => {
    const [results, setResults] = useState([]);
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const searchInput = useRef();

    useEffect(() => {
        getLocation().then(({ latitude, longitude }) => {
            setLatitude(latitude);
            setLongitude(longitude);
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const searchTerm = searchInput.current.value;
        const res = await fetch(`/api/yelp?term=${searchTerm}&latitude=${latitude}&longitude=${longitude}`);
        const data = await res.json();
        setResults(data.businesses);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Search for restaurants near me:
                    <input type="text" ref={searchInput} />
                </label>
                <button type="submit">Search</button>
            </form>
            {results.length > 0 &&
                results.map((result) => (
                    <div key={result.id}>
                        <h3>{result.name}</h3>
                        <p>{result.location.display_address.join(', ')}</p>
                    </div>
                ))}
        </div>
    );
};

export default RestaurantSearch;
