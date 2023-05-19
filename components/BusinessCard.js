import React, { useState } from 'react';
import styled from 'styled-components';
// import YelpLogo from '../assets/yelp_logo.png';

const YelpLogo = 'https://www.elyons.com/wp-content/uploads/2018/11/yelp-logo-transparent-background-4.png';
const MapLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1428px-Google_Maps_icon_%282020%29.svg.png'
export default function BusinessCard({ business }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const roundedDistance = Number(business.distance / 1609).toFixed(2);

  return (
    <CardContainer>
      <TitleWrapper>
        <RestaurantTitle>{business.name}</RestaurantTitle>
      </TitleWrapper>
      <ContentWrapper>
        <ImageWrapper>
          <BusinessImage
            src={business.image_url || 'https://via.placeholder.com/150'}
          />
        </ImageWrapper>
        <InfoWrapper>
          <InformationalText>Rating: {business.rating}/5</InformationalText>
          <InformationalText>Review Count: {business.review_count}</InformationalText>
          <a href={business.url} target="_blank">
            <YelpLogoImage src={YelpLogo} alt="Link to Business on Yelp" />
          </a>

          <ButtonWrapper>
            <Button onClick={toggleOpen}>More Info</Button>
          </ButtonWrapper>
          {isOpen && (
            <MoreInfoWrapper>
              {business.distance && (
                <InformationalText>Distance: {roundedDistance} mile(s)</InformationalText>
              )}
              {business.phone && <InformationalText>Phone: {business.phone}</InformationalText>}
              {business.review && <InformationalText>Top Review: {business.review}</InformationalText>}
              {business.coordinates && (
                <Link
                  href={`https://www.google.com/maps/dir/?api=1&destination=${business.coordinates.latitude},${business.coordinates.longitude}`}
                  target="_blank"
                  alt="Directions on Google Maps"
                >
                  <MapsIcon src={MapLogo} alt="Directions on Google Maps"/>
                  Get Directions
                </Link>
              )}
            </MoreInfoWrapper>
          )}
        </InfoWrapper>
      </ContentWrapper>
    </CardContainer>
  );
}

const MapsIcon = styled.img`
  height: 1.5rem;
  margin-right: 5px;
  aspect-ratio: 1428, 2049;
`;

const Link = styled.a`
  color: orange;
  font-size: 1.5rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin: 10px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-width: 400px;
  width: 100%;
  min-width: 100px;
  min-height: 300px;
  text-align: center;
  
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

const TitleWrapper = styled.div`
margin-top: 0;  
margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  flex: 1;
  align-self: flex-end;
  min-width: 100px;
  width: 50%;
  max-width: 100%;
  align-self: center;
`;

const Info = styled.div`
  flex-grow: 1;
`;

const BusinessImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
  aspect-ratio: 1/1;
`;


const InfoWrapper = styled.div`
flex: 1 1 auto;
  display: flex; 
  flex-direction: column;
`;

const RestaurantTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
`;

const YelpLogoImage = styled.img`
    min-width: 100px;
    width: 50%;
    aspect-ratio: 430/142;
    object-fit: cover;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const MoreInfoWrapper = styled.div`
  margin-top: 10px;
`;

const InformationalText = styled.p`
  margin: .3ch;
  font-size: 1.5rem

`;




