import React from "react";
import PropTypes from "prop-types";

export default class Item extends React.PureComponent {
    render() {
        const { name, price, imgSrc, addToCart } = this.props;
        return (
            <div>
                {imgSrc && <img src={imgSrc} alt={name} />}
                <p>
                    <b>{name}</b>: ${price}
                </p>
                {addToCart && <button onClick={addToCart}>Add To Cart</button>}
            </div>
        );
    }
}

Item.propTypes = {
    addToCart: PropTypes.func,
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.int
};
