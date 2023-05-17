import styled from 'styled-components';
import { useState } from 'react';
import { SWRConfig } from 'swr';
import Spinner from '../components/Spinner';
import Location from '../components/Location';
import useSWR from 'swr';
import YelpAPI from '../components/yelp-api';


const cities = [
  'Los Angeles',
  'Orange',
  'Irvine',
  'Anaheim',
  'Santa Ana'
];

export default function Home({ fallback }) {
  const [city, setCity] = useState('Los Angeles');
  const { data, error } = useSWR(`/api/yelp/${city}`, fetchYelpData);

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity);
  };

  function fetchYelpData() {
    const apiKey = process.env.YELP_API_KEY;
    const url = `https://api.yelp.com/v3/businesses/search?location=${city}&term=${searchTerm}`;

    return fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
      .then((response) => response.json())
      .then((data) => data.businesses)
      .catch((error) => {
        console.error('An error occurred while fetching data:', error);
        return [];
      });
  }

  return (
    <div>
    <h1>Welcome to the Home Page of our Restaurant Finder: </h1>
    <YelpAPIExample />
  </div>
    // <SWRConfig value={{ fallback }}>
    //   <Wrapper>
    //     <Cities>
    //       {cities.map((c) => (
    //         <Button
    //           selected={c === city}
    //           key={c}
    //           onClick={() => handleCityChange(c)}
    //         >
    //           {c}
    //         </Button>
    //       ))}
    //     </Cities>
    //     <YelpSearch />
    //     <ForecastWrapper>
    //       {error ? (
    //         <ErrorText>An error occurred while fetching data.</ErrorText>
    //       ) : data ? (
    //         <Results data={data} />
    //       ) : (
    //         <Spinner />
    //       )}
    //     </ForecastWrapper>
    //     <Location />
    //   </Wrapper>
    // </SWRConfig>
  );
}
// async function fetchYelpData(city, searchTerm) {
//   const apiKey = process.env.YELP_API_KEY;
//   const url = `https://api.yelp.com/v3/businesses/search?location=${city}&term=${searchTerm}`;
//   const response = await fetch(url, {
//     headers: {
//       Authorization: `Bearer ${apiKey}`
//     }
//   });
//   const data = await response.json();
//   return data.businesses;
// }

// export async function getServerSideProps(context) {
//   const city = cities[0];
//   const searchTerm = '';
//   const businesses = await fetchYelpData(city, searchTerm);
//   return {
//     props: { businesses }
//   };
// }


const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input[type='text'] {
    margin-right: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }
  `;
const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input[type='text'] {
    margin-right: 10px;
  }
`;
const ErrorText = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;

const Cities = styled.div`
  padding-top: 25px;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
  `;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const ForecastWrapper = styled.div`
  flex: 1;
  margin: 25px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  padding: 5px;
  border-bottom: 2px solid ${(p) => (p.selected ? 'black' : 'transparent')};
`;

function Results({ data }) {
  return (
    <ul>
      {data.map((business) => (
        <li key={business.id}>{business.name}</li>
      ))}
    </ul>
  );
}