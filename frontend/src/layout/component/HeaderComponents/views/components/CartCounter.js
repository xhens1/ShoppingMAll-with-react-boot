import React, { Component } from "react";
import { numberWithCommas } from "./CartUtil.js";

class Counter extends Component {

    state = {
        quantity: 0
    }

    updateQuantity = modifier => {
      const minimum = this.props.min || 0;
      const maximum = this.props.max || Number.POSITIVE_INFINITY;

      const quantity = this.state.quantity + modifier;

      if (quantity < minimum || maximum < quantity) {
          return;
      }

      this.setState(
        {
          quantity,
        },
        () => {
          this.props.updateOrder({
            name: this.props.name,
            price: this.getPrice(),
          });
        }
      );
    }

    getPrice = () => {
        return this.props.price * this.state.quantity;
    }
  
    render() {
        return (
            <div className="prd-temp">
                <img className="prd-img" src={this.props.url} alt=""/>
                <span className="prd-name">{this.props.name}</span>
                <span className="prd-price">{this.props.price}원</span>
                <div className="prd-btn-wrap">
                    <button className="prd-btn minus" onClick={() => this.updateQuantity(-1)}>-</button>
                    <span className="prd-quantity">{this.state.quantity} </span>
                    <button className="prd-btn plus" onClick={() => this.updateQuantity(1)}>+</button>
                </div>
                <span className="prd-price-total"> {numberWithCommas(this.getPrice())}원</span>
            </div>
        );
    }
}

export default Counter;