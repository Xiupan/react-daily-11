import React, {Component} from 'react';
import {connect} from 'react-redux'

import Product from "../components/Product";


class ProductList extends Component {
    render() {
      console.log("this.props", this.props)
        const products = this.props.products.map(thing => {
          return (
            <li key={thing.id}>
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
    // complete the `if else` statement including conditions and `products` value
    if (state.filter === 'underTwenty') {
      console.log("Returning products under $20.")
      // return {products: products}
    } else if (state.filter === 'overTwenty') {
      console.log("Returning products over $20.")
      // return {products: products}
    } else {
      console.log("Returning All")
      console.log(state.products)
      return {products: state.products}
    }
    // return {products: products}
}

export default connect(mapStateToProps)(ProductList);
