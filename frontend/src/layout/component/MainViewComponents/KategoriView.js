import React, { Component } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { List, ListItem } from "@material-ui/core";

import '../../css/KategoriView.css'
import { BsFillGiftFill, BsBook, BsFillDisplayFill } from "react-icons/bs";
import { FaCalendarDay, FaCalendarWeek, FaCalendarAlt } from "react-icons/fa"
import { GiClothes } from "react-icons/gi"
 
import BestItemViews from '../MainViewComponents/views/components/BestItemViews'
import ClothesItemViews from '../MainViewComponents/views/components/ClothesItemViews'
import BooksItemViews from '../MainViewComponents/views/components/BooksItemViews'
import ElectroItemViews from '../MainViewComponents/views/components/ElectroItemViews'
import TodayItemViews from '../MainViewComponents/views/components/TodayItemViews'


const Wrapper = styled.div`
  display: flex;
  position: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  height: 60%;
  width: 100%;
  z-index: 5;

  background: white;
  color: black;

  font-size: 2.5rem;
  border: 1px solid black;
`;

const Kate_width = {
  width: "25%",
};

const contents_Size = {
  width: "75%",
};

const Infinite = require('react-infinite');

const vertical_M = {
  alignItems: 'center',
  justifyContent: 'center',
}

const obj ={
  0 : <BestItemViews />,
  1 : <ClothesItemViews />,
  2 : <BooksItemViews />,
  3 : <ElectroItemViews />,
  4 : <TodayItemViews />,
}
class Body extends Component{
  state= {
    activTab : 0
  }
  
  clickHandler = (id) => {
    this.setState({activTab : id})
  }

  render(){
    return(
      <Wrapper>
        <div style={Kate_width}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <List className="listWrap">
                <ListItem style={vertical_M} button onClick={ () => this.clickHandler(0)}><BsFillGiftFill /> &nbsp; BEST 100</ListItem>
                <ListItem style={vertical_M} button onClick={ () => this.clickHandler(1)}><GiClothes /> &nbsp; 의류</ListItem>
                <ListItem style={vertical_M} button onClick={ () => this.clickHandler(2)}><BsBook /> &nbsp; 도서</ListItem>
                <ListItem style={vertical_M} button onClick={ () => this.clickHandler(3)}><BsFillDisplayFill /> &nbsp; 전자제품</ListItem>
                <ListItem style={vertical_M} button onClick={ () => this.clickHandler(4)}><FaCalendarDay /> &nbsp; 오늘의 상품</ListItem>
              </List>
            </Grid>
          </Grid>
        </div>
        <div  className="Kategori_Item_Wrap" style={contents_Size}>
          <Infinite containerHeight={550} elementHeight={1000}>
            {obj[this.state.activTab]}
          </Infinite>
        </div>
    </Wrapper>
    );
  }
}

export default Body;