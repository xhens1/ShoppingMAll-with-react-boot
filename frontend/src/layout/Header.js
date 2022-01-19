import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import horkov from './img/logo.png';
import SearchBox from './component/HeaderComponents/SearchBox.js';
import LoginBox from './component/HeaderComponents/LoginBox.js';
import './css/Header.css';

const Wrapper = styled.div`
    display: flex;
    position: flex;
    align-items: center;
    height: 100px;
    width: 100%;
    top: 0px;
    z-index: 5;
    text-align: center;
    color: white;
    border-bottom: 3px solid black;
    
    font-size: 40px;

    min-width: 1300px;
`;

const width100 = {
    width: '100%',
}

const workingPart = {
    backgroundColor: 'yellow',
}
const marginAll = {
    margin: '5px 5px 5px 5px',
}

const searchBar = {
    margin: '15px 5px 5px 20%',
    width: '60%',
    height: '50%',
    borderRadius : '25px',
    border: '1px solid #D3D3D3',
}

const Header = () => (
    <Wrapper>
      <div style={width100}>
        <Grid container spacing={1}>
          <Grid container spacing={1} item xs={3}>
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={8}>
                  <div style={marginAll}><a href="/"><img src={horkov} width='100%' height='60px'></img></a></div>
              </Grid>
              <Grid item xs={2}>
              </Grid>
          </Grid>
          <Grid item xs={6}>
            <div container style={searchBar}>
                <SearchBox item xs={12}/>
            </div>
          </Grid>
          <Grid container spacing={1} item xs={3}>
              <Grid item xs={1}></Grid>
              <Grid container item xs={11}>
                  <LoginBox/>
              </Grid>
          </Grid>
        </Grid>
      </div>
    </Wrapper>
)

export default Header;