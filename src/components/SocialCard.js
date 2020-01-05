import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 320px;
  height: 340px;
  border-radius: 5px;
  -webkit-box-shadow: 15px 4px 30px -16px rgba(0,0,0,0.3);
  -moz-box-shadow: 15px 4px 30px -16px rgba(0,0,0,0.3);
  box-shadow: 15px 4px 30px -16px rgba(0,0,0,0.3);
`;

const Image = styled.div`
  height: 63%;
  width: 100%;
  background-image: url("https://ssl.cdn-redfin.com/system_files/media/354544_JPG/item_5.jpg");
  background-size: contain;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

const Info = styled.div`
  height: 37%;
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 2.5rem;
`

const Heart = styled.div`
    width: 30px;
    height: 30px;
    background-image: url("https://image.flaticon.com/icons/svg/1077/1077035.svg");
`;

const DescWrapper = styled.div`
    padding: 10px 20px;
    font-size: 1.4rem;
    color: grey;
`;

const SocialCard = ({image, price, beds, baths, sq}) => (
    <Wrapper>
        <Image>
            <img src={image} />
        </Image>
        <Info>
            <PriceWrapper>
                <Price>${price}</Price>
                <Heart />
            </PriceWrapper>
            <DescWrapper>
                {beds} Beds {baths} Baths {sq} sq. ft.
            </DescWrapper>
        </Info>
    </Wrapper>
);

export default SocialCard;