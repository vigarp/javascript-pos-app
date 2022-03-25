import React, { Component } from 'react'

export class Product extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {product, onAdd} = this.props
        return (
            <div className='card'>
                <img className='card-img-top' src={product.image} alt={product.name} />
                <div className='card-body'>
                    <h5 className='card-title'>{product.name}</h5>
                    <p className='card-text'>Rp. {product.price}</p>
                    <button className='button' onClick={() => onAdd(product)}>Add To Cart</button>
                </div>
            </div>
        )
    }
}

export default Product
