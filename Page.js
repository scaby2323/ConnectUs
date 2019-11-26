import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

export default class Page extends React.PureComponent {
    getItems() {
        return this.props.items.map((item, idx) => {
            return (
                <Item
                    name={item.name}
                    price={item.price}
                    imgSrc={item.img}
                    addToCart={() => this.props.addToCart(item)}
                    key={`item-${idx}`}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Available Items</h2>
                    {this.getItems()}
                </div>
            </div>
        );
    }
}

Page.propTypes = {
    addToCart: PropTypes.func,
    items: PropTypes.array
};
