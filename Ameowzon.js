import React from "react";
import Page from "./Page";
import Cart from "./Cart";

export default class MillennialApp extends React.PureComponent {
    constructor(props) {
        super(props);

        const items = [
            {
                name: "Christmas Lights",
                price: 12.49,
                img:
                    "https://images-na.ssl-images-amazon.com/images/I/51vJorc396L._SY90_.jpg"
            },
            {
                name: "8x10 Black Frame",
                price: 14.96,
                img:
                    "https://images-na.ssl-images-amazon.com/images/I/31AipEiIp9L._SY180_.jpg"
            },
            {
                name: "Ziplock Freezer Bags",
                price: 14.99,
                img:
                    "https://images-na.ssl-images-amazon.com/images/I/41ZDaYCInDL._SY180_.jpg"
            },
            {
                name: "Soft Grey Queen-size Blanket",
                price: 19.99,
                img:
                    "https://images-na.ssl-images-amazon.com/images/I/51sC0oI7ygL._SY180_.jpg"
            },
            {
                name: "Alien Antenna",
                price: 9.99,
                img: "https://images-na.ssl-images-amazon.com/images/I/11pomvv2QXL.jpg"
            }
        ];

        this.state = {
            items: items,
            cart: []
        };
    }

    addToCart = item => {
        const updatedCart = [...this.state.cart];
        updatedCart.push(item);

        this.setState({
            cart: updatedCart
        });
    };

    render() {
        return (
            <div>
                <Page items={this.state.items} addToCart={this.addToCart} />
                <Cart items={this.state.cart} />
            </div>
        );
    }
}
