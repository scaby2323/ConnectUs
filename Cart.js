import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

export default class Cart extends React.PureComponent {
  getTotal() {
    return this.props.items.reduce((total, item) => total + item.price, 0);
  }

  getItems() {
    return this.props.items.map((item, idx) => {
      return <Item name={item.name} price={item.price} key={`item-${idx}`} />;
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2>Shopping Cart</h2>
          {this.getItems()}
          <p>Total: ${this.getTotal()}</p>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  items: PropTypes.array
};
