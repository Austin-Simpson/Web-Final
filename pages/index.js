import { useState } from 'react';
import YelpAPI from '../components/yelp-api';

export default function Home() {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [businesses, setBusinesses] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await YelpAPI.search(term, location);
    setBusinesses(results.slice(0, 5));
  };

  const handleLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const city = await YelpAPI.getCity(latitude, longitude);
        setLocation(city);
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Restaurant Type"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleLocation}>
          Get Current City
        </button>
      </form>
      <ul>
        {businesses.map((business) => (
          <li key={business.id}>{business.name}</li>
        ))}
      </ul>
    </div>
  );
}
