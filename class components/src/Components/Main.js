import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product'

export class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {products, onAdd} = this.props;
        return (
            <Fragment>
            <div className='center-menu'>
            {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            </Fragment>
        )
    }
}

export default Main
