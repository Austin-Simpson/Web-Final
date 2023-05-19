import styled from 'styled-components';
import { useState } from 'react';
import YelpAPI from '../components/yelp-api';
import BusinessCard from '../components/BusinessCard';

export default function Home() {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [businesses, setBusinesses] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await YelpAPI.search(term, location);
    if (results.error) {
      setError(results.error);
      return;
    }
    setError('');
    setBusinesses(results);
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
          placeholder="Restaurant Type (leave blank for all)"
          alt="Restaurant Type (leave blank for all)"
          label="Restaurant Type (leave blank for all)"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <SearchBox
          type="text"
          placeholder="Location"
          alt="Location"
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button type="submit" alt="Search">Search</Button>
        <Button type="button" alt="Get location" onClick={handleLocation}>
          Get Current City
        </Button>
        {error && <NewLine />}
        {error && <ErrorMessage>{error}</ErrorMessage>}

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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  `;

  const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;


const SearchWrapper = styled.form`
  border: 1px solid #ddd;
  border-radius: 15px;
  margin: 10px;
  padding: 20px;
  background-color: rgba(0,0,0,0.2);
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  `;

const SearchBox = styled.input`
min-width: 30ch;
width: fit-content;
height: 1.5rem;
background-color: rgba(0,0,0,0.5);
color: white;
placeholder: white;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
margin: 5px;
&:focus {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
`;

const Button = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  margin: 8px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }
`;

const ErrorMessage = styled.div`
  color: white;
  font-weight: bold;
  background-color: rgba(255, 0, 0, 0.8);
  padding: 10px;
  border-radius: 10px;
  width: 80%;
`;

const NewLine = styled.div`
width: 100%;
height: 0;
`;