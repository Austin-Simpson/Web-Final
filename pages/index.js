import styled from 'styled-components';
import { useState } from 'react';
import YelpAPI from '../components/yelp-api';
import BusinessCard from '../components/BusinessCard';

export default function Home() {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [businesses, setBusinesses] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await YelpAPI.search(term, location);
    setBusinesses(results.slice(0, 12));
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const { city, state } = await YelpAPI.getCityFromCoordinates(latitude, longitude);
      setLocation(`${city}, ${state}`);
    }, (error) => {
      console.log(error);
    });
  };

  return (
    <FullWrapper>
      <SearchWrapper onSubmit={handleSubmit}>
        <SearchBox
          type="text"
          placeholder="Restaurant Type"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <SearchBox
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleLocation}>
          Get Current City
        </button>
      </SearchWrapper>
      <Wrapper>
      {businesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
      </Wrapper>
    </FullWrapper>
  );
}

const FullWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  `;

const Wrapper = styled.div`
  // display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // justify-content: space-evenly;
  width: 100%;
  border: 2px dashed red;

  display: grid;
  // grid-template-columns: repeat(2, 1fr);
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );

  gap: 20px;
  `;

const SearchWrapper = styled.form`
  border: 1px solid #ddd;
  border-radius: 15px;
  margin: 10px;
  padding: 20px;
  background-color: rgba(0,0,0,0.2);
  `;

const SearchBox = styled.input`
width-min: 20px;
width: 20%;
width-max: 100px;
background-color: rgba(0,0,0,0.5);
color: white;
placeholder: white;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;