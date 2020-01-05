import React from 'react';
import styled from 'styled-components';
import GlobalStyle from "./theme/GobalStyle";
import SocialCard from './components/SocialCard';
import { data } from './data/houses';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
`;

const Root = () => (
    <>
        <GlobalStyle />
        <Wrapper>
            {data.map(item => (
                <SocialCard key={item.price} {...item}/>
            ))}
        </Wrapper>
    </>
);


export default Root;
