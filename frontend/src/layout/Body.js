import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';  
import HotProductV from './component/MainViewComponents/HotProductV';
import KategoriV from './component/MainViewComponents/KategoriView'

const Wrapper = styled.div`
    height: 1020px;
    width: 100%;
    top: 60px;
    z-index: 5;

    color: white;
    
    font-size: 2.5rem;
    min-width: 1300px;
`;


const Body = () => (
    <Wrapper>
        <HotProductV/>
        <KategoriV/>
    </Wrapper>
)

export default Body;