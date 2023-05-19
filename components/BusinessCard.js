// import React, { useState } from 'react';
// import styled from 'styled-components';
// import YelpLogo from '../assets/yelp_logos/yelp_logos/Logo/Dark bg/RGB/yelp_logo_dark_bg.svg';


// export default function BusinessCard({ business }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleOpen = () => setIsOpen(!isOpen);

//   return (
//     <CardContainer>
//       <RestaurantTitle>{business.name}</RestaurantTitle>
//       <BusinessImage
//         src={business.image_url || 'https://your-placeholder-image-url'}
//         alt={business.name}
//       />
//       <InformationalText>Rating: {business.rating}/5</InformationalText>
//       <InformationalText>Review Count: {business.review_count}</InformationalText>

//       <a href={business.url} target="_blank" rel="noopener noreferrer"><img src='../assets/yelp_logos/yelp_logos/Logo/Dark bg/RGB/yelp_logo_dark_bg.svg' alt="Yelp" /></a>
      
//       <button onClick={toggleOpen}>More Info</button>
//       {isOpen && (
//         <div>
//           {business.distance && <InformationalText>Distance: {business.distance}</InformationalText>}
//           {business.phone && <InformationalText>Phone: {business.phone}</InformationalText>}
//           {business.review && <InformationalText>Top Review: {business.review}</InformationalText>}
//           {business.coordinates && (
//             <a
//               href={`https://www.google.com/maps/dir/?api=1&destination=${business.coordinates.latitude},${business.coordinates.longitude}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Get Directions
//             </a>
//           )}
//         </div>
//       )}
//     </CardContainer>
//   );
// }

// // css things:

// const CardContainer = styled.div`
// // display: flex;  
// // flex: 1;
//   border: 1px solid #ddd;
//   display: inline-block;
//   border-radius: 15px;
//   margin: 10px;
//   padding: 20px;
//   background-color: rgba(0, 0, 0, 0.2);
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   // display: flex;
//   // flex-direction: row;
//   // align-items: center;
//   width: 32%; 
//   // min-width: fit-content;
//   min-width: 900px;
// `;


// const RestaurantTitle = styled.h2`
//   font-size: 44px;
//   margin-bottom: 12px;
//   margin-top: -15px;
// `;

// const BusinessImage = styled.img`
// width-min: 20px;  
// width: 20%;
// width-max: 100px;
//   // height: 20%;
//   border-radius: 15px;
// `;

// const InformationalText = styled.p`
//   margin-bottom: 6px;
//   font-size: 20px;
//   font-weight: 500;
//   line-height: 1;
// `;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import YelpLogo from '../assets/yelp_logos/yelp_logos/Logo/Dark bg/RGB/yelp_logo_dark_bg.svg';

// export default function BusinessCard({ business }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleOpen = () => setIsOpen(!isOpen);

//   return (
//     <CardContainer>
//       <ImageWrapper>
//         <BusinessImage
//           src={business.image_url || 'https://your-placeholder-image-url'}
//           alt={business.name}
//         />
//       </ImageWrapper>
//       <InfoWrapper>
//         <RestaurantTitle>{business.name}</RestaurantTitle>
//         <InformationalText>Rating: {business.rating}/5</InformationalText>
//         <InformationalText>Review Count: {business.review_count}</InformationalText>
//         <a href={business.url} target="_blank" rel="noopener noreferrer">
//           <YelpLogoImage src={YelpLogo} alt="Yelp" />
//         </a>
//       </InfoWrapper>
//       <ButtonWrapper>
//         <button onClick={toggleOpen}>More Info</button>
//       </ButtonWrapper>
//       {isOpen && (
//         <MoreInfoWrapper>
//           {business.distance && (
//             <InformationalText>Distance: {business.distance}</InformationalText>
//           )}
//           {business.phone && <InformationalText>Phone: {business.phone}</InformationalText>}
//           {business.review && <InformationalText>Top Review: {business.review}</InformationalText>}
//           {business.coordinates && (
//             <a
//               href={`https://www.google.com/maps/dir/?api=1&destination=${business.coordinates.latitude},${business.coordinates.longitude}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Get Directions
//             </a>
//           )}
//         </MoreInfoWrapper>
//       )}
//     </CardContainer>
//   );
// }

// // CSS styles:

// const CardContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   border: 1px solid #ddd;
//   border-radius: 15px;
//   margin: 10px;
//   padding: 20px;
//   background-color: rgba(0, 0, 0, 0.2);
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   min-width: 400px;
//   min-height: 300px;
// `;

// const ImageWrapper = styled.div`
//   flex: 0 0 auto;
//   margin-right: 20px;
// `;

// const BusinessImage = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 15px;
// `;

// const InfoWrapper = styled.div`
//   flex: 1 1 auto;
// `;

// const RestaurantTitle = styled.h2`
//   font-size: 20px;
//   margin-bottom: 6px;
// `;

// const YelpLogoImage = styled.img`
//   width: 60px;
//   height: 30px;
// `;

// const ButtonWrapper = styled.div`
//   flex: 0 0 auto;
//   margin-left: 20px;
// `;

// const MoreInfoWrapper = styled.div`
//   margin-top: 10px;
// `;

// const InformationalText = styled.p`
//   margin-bottom: 6px;
//   font-size: 16px;
// `;

import React, { useState } from 'react';
import styled from 'styled-components';
import YelpLogo from '../assets/yelp_logos/yelp_logos/Logo/Dark bg/RGB/yelp_logo_dark_bg.svg';

export default function BusinessCard({ business }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const roundedDistance = Math.round(business.distance);

  return (
    <CardContainer>
      <TitleWrapper>
        <RestaurantTitle>{business.name}</RestaurantTitle>
      </TitleWrapper>
      <ContentWrapper>
        <ImageWrapper>
          <BusinessImage
            src={business.image_url || 'https://your-placeholder-image-url'}
            alt={business.name}
          />
        </ImageWrapper>
        <InfoWrapper>
          <InformationalText>Rating: {business.rating}/5</InformationalText>
          <InformationalText>Review Count: {business.review_count}</InformationalText>
          <ButtonWrapper>
            <button onClick={toggleOpen}>More Info</button>
          </ButtonWrapper>
        </InfoWrapper>
      </ContentWrapper>
      {/* <ButtonWrapper>
        <button onClick={toggleOpen}>More Info</button>
      </ButtonWrapper> */}
      {isOpen && (
        <MoreInfoWrapper>
          {business.distance && (
            <InformationalText>Distance: {roundedDistance}</InformationalText>
          )}
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
        </MoreInfoWrapper>
      )}
    </CardContainer>
  );
}

// CSS styles:

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin: 10px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-width: 400px;
  min-height: 300px;
  text-align: center;
`;

const TitleWrapper = styled.div`
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageWrapper = styled.div`
  flex: 0 0 auto;
  margin-right: 20px;
  align-self: flex-end;
  min-width: 20px;
  min-height: 200px;
`;

const BusinessImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 15px;
`;

const InfoWrapper = styled.div`
flex: 1 1 auto;
  display: flex; /* Add this line */
  flex-direction: column; /* Add this line */
`;

const RestaurantTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 6px;
  text-align: center;
`;

const YelpLogoImage = styled.img`
  width: 60px;
  height: 30px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const MoreInfoWrapper = styled.div`
  margin-top: 10px;
`;

const InformationalText = styled.p`
  margin-bottom: 6px;
  font-size: 24px;
`;

