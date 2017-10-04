import React, {Component} from 'react';
import {connect} from 'react-redux'

import Product from "../components/Product";

class ProductList extends Component {

    render() {
        const products = this.props.products.map(thing => {
          return (
            <li>
              <img src={thing.image}></img>
              <h3>{thing.title}</h3>
              <h4>{thing.price}</h4>
            </li>
          )
        });
        // Create a dynamically populated list of `<Product />` components
        // Each `<Product />` component should have a single object from the `products` state property (array)
        // applied to the component as a `product` property
        return (
            <ul className="ProductList">
              {products}
            </ul>
        );
    }
}

// Using the `mapStateToProps` function, filter the array stored in the
// state `products` property based on 3 criterea:
// - `underTwenty`
// - `overTwenty`
// - `all` or the default
const mapStateToProps = function(state) {
    let products = state.products;
    // complete the `if else` statement including conditions and `products` value
    if (state.filter === 'underTwenty') {
      return {products: products}
    } else if (state.filter === 'overTwenty') {
      return {products: products}
    } else {
      return {products: products}
    }
    console.log(products)
    return {products: products}
}

export default connect(mapStateToProps)(ProductList);
