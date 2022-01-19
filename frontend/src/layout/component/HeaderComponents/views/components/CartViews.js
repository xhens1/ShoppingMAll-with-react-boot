import React, {Component, useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import Counter from "./CartCounter";
import "../../../../css/CartCounter.css";
import Button from 'react-bootstrap/Button'

import axios from "axios";


class CartViews extends Component{
  constructor(props) {
    super(props);
    this.state = {
      Items: []
    };
  }

  // 담은 상품을 불러옴
  getBasketData(){
    axios.get(`/basket/${this.props.id}`)
      .then(response => {
        const Items = response.data;
        this.setState({
          Items: Items
        })
      })
  }

  // 주문완료 버튼
  order(){
    alert('주문이 완료되었습니다. 감사합니다.');
    window.location.href="/";
  }



  componentDidMount(){
    this.getBasketData();
  }
  render(){
    var rows = [];

    // 담은 상품 목록을 view로 불러옴
    for(var i=0; i<this.state.Items.length; i++){
      rows.push(
        <Counter
          seq={i}
          name={this.state.Items[i].title}
          price={this.state.Items[i].cost}
          url={`/showimage/${this.state.Items[i].item_id}/0`}
          max={10}
          updateOrder={this.props.updateOrder}
        />
      )
    }
    return (
      <div>
        <div className="wrap">
          <div className="prd-title">
            <span className="prd-img">이미지</span>
            <span className="prd-name">제품명</span>
            <span className="prd-price">가격</span>
            <span className="prd-quantity">수량</span>
            <span className="prd-price-total">총계</span>
          </div>
            {rows}
          <br></br>
        </div>
        <div className="total-all">총 계 : {this.props.orderTotal}원</div>
        <div style={{margin: "0 0 0 50%"}}>
          <Button variant="outline-secondary" onClick={this.order}>주문하기</Button>{' '}
        </div>
      </div>
    );
  }
}

export default CartViews;
