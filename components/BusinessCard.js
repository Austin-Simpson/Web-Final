import React, { useState } from 'react';
import styled from 'styled-components';
import YelpLogo from '../assets/yelp_logos/yelp_logos/Logo/Dark bg/RGB/yelp_logo_dark_bg.svg';


export default function BusinessCard({ business }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <CardContainer>
      <RestaurantTitle>{business.name}</RestaurantTitle>
      <BusinessImage
        src={business.image_url || 'https://your-placeholder-image-url'}
        alt={business.name}
      />
      <InformationalText>Rating: {business.rating}/5</InformationalText>
      <InformationalText>Review Count: {business.review_count}</InformationalText>

      <a href={business.url} target="_blank" rel="noopener noreferrer"><img src='../assets/yelp_logos/yelp_logos/Logo/Dark bg/RGB/yelp_logo_dark_bg.svg' alt="Yelp" /></a>
      
      <button onClick={toggleOpen}>More Info</button>
      {isOpen && (
        <div>
          {business.distance && <InformationalText>Distance: {business.distance}</InformationalText>}
          {business.phone && <InformationalText>Phone: {business.phone}</InformationalText>}
          {business.review && <InformationalText>Top Review: {business.review}</InformationalText>}
          {business.coordinates && (
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${business.coordinates.latitude},${business.coordinates.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          )}
        </div>
      )}
    </CardContainer>
  );
}

// css things:

const CardContainer = styled.div`
// display: flex;  
// flex: 1;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin: 10px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  width: 32%; 
  min-width: fit-content;

`;


const RestaurantTitle = styled.h2`
  font-size: 44px;
  margin-bottom: 12px;
  margin-top: -15px;
`;

const BusinessImage = styled.img`
width: 100%;
max-width: 100px;
  // height: 20%;
  border-radius: 15px;
`;

const InformationalText = styled.p`
  margin-bottom: 6px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
`;
