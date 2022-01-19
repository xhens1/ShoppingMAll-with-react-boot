import React, { Component } from "react";
import styled from "styled-components";

import CartViews from "./components/CartViews";
import { numberWithCommas } from "./components/CartUtil.js";

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

class Cart extends Component {
  state = {
    order: {},
    orderTotal: 0
  }
  
  updateOrder = ({ name, price }) => {

    var order = this.state.order;
    order[name] = price;

    var orderTotal = 0; 
    for (var key in order) {
      orderTotal += order[key];
    }

    this.setState({
      order,
      orderTotal
    })
  }

  render() {
    return (
      <Wrapper>
        <CartViews
          id={this.props.match.params.id}
          orderTotal={numberWithCommas(this.state.orderTotal)}
          updateOrder={this.updateOrder} />
      </Wrapper>
    );
  }
}

export default Cart;
