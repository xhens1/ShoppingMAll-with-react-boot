import React, {Component} from 'react';
import styled from 'styled-components';
import BestItemViews from './components/BestItemViews';
const Wrapper = styled.div`
    height: 1020px;
    width: 100%;
    top: 60px;
    z-index: 5;

    color: black;
    
    border-top: 3px solid black;
    font-size: 25px;
    min-width: 1300px;
`;

class Best100 extends Component{
  render(){
    return(
      <Wrapper>
        <BestItemViews/>
      </Wrapper>
    );
  }
}

export default Best100;