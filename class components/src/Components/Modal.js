import React, { Component } from 'react'

export class Modal extends Component {
    render() {
        const { cartItems, openModal } = this.props;
        const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
        const taxPrice = itemsPrice * (10 / 100);
        const subTotal = itemsPrice + taxPrice
        return (
            <div className="checkout-wrapper">
            <div className="checkout-inner">
                <div className='close-button' onClick={()=>openModal(false)}>X</div>
                <div className="checkout-inner-upper">
                    <p className="checkout-text">Checkout</p>
                    <p className="checkout-receipt">Receipt no: #010410919</p>
                </div>
                <p className="cashier-text">Cashier: Pevita Pearce</p>
                    {cartItems.map((item) => (
                        <div key={item.id} className='checkout-content'>
                            <div className="checkout-items">{item.name} x{item.qty}</div>
                            <div className="checkout-price">Rp. {item.price * item.qty}</div>
                        </div>
                    ))}
                    <hr></hr>
                <div className="checkout-content-ppn">
                    <div className="checkout-items">PPN 10%</div>
                    <div className="checkout-price" id="ppn">Rp. {taxPrice}</div>
                </div>
                <div className="total" id="total">Total: Rp. {subTotal}</div>
                <div className="payment">Payment: Cash</div>
                <div className="checkout-inner-lower">
                    <div className="btn-print">Print</div>
                    <div className="or-text">Or</div>
                    <div className="btn-send-email">Send Email</div>
                </div>
            </div>
        </div>
        )
    }
}

export default Modal
