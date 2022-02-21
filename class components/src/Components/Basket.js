import React, { Component } from 'react'

export class Basket extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {cartItems, onAdd, onRemove, removeByImage, openModal, onCancel} = this.props;
        const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
        return (
            <aside className='main-content-cart'>
            <div className='cart-item'>
                {cartItems.length ===0 && <div className='cart-empty'>
                    <img src={'./img/icons/cart-empty-icon.svg'}/>
                    <p>Your cart is empty</p>
                    <p>Please add some items from the menu</p>
                </div>}
                {cartItems.map((item) => (
                    <div key={item.id} className='cart-item-list'>
                        <img className='cart-images' onClick={()=>removeByImage(item.id)} src={item.image} width={100} height={100}/>
                        <div className='cart-text'>{item.name}</div>
                        <div className='button-unit'>
                            <div onClick={()=>onRemove(item)} className='btn-min'>-</div>
                            <div className='value'>{item.qty}</div>
                            <div onClick={()=>onAdd(item)} className='btn-plus'>+</div>
                        </div>
                        <span className='price'>Rp. {item.price}</span>
                    </div>
                ))}
            </div>
            {cartItems.length !== 0 && (
                <div className='cart-checkout'>
                    <div className='cart-checkout-upper'>
                        <div className='upper-left'>
                            <div>Total</div>
                            <div><i>Belum termasuk PPN</i></div>
                        </div>
                        <div className='upper-right'>
                            <div>Rp. {itemsPrice}</div>
                        </div>
                    </div>
                    <div className='cart-checkout-lower'>
                        <div className='btn-checkout' onClick={()=>openModal(true)}>Checkout</div>
                        <div className='btn-cancel' onClick={()=>onCancel()}> Cancel</div>
                    </div>
                </div>
            )}
        </aside>
        )
    }
}

export default Basket
