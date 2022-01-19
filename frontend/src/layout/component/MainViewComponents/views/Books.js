import React, {Component} from 'react';
import styled from 'styled-components';
import BooksItemViews from './components/BooksItemViews';
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

class Books extends Component{
  render(){
    return(
      <Wrapper>
        <BooksItemViews/>
      </Wrapper>
    );
  }
}

export default Books;