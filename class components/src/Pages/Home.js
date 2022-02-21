import React, { Component, Fragment } from 'react'
import Basket from '../Components/Basket'
import Header from '../Components/Header'
import Main from '../Components/Main'
import Modal from '../Components/Modal'
import Sidebar from '../Components/Sidebar'
import data from '../data'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
      showModal: false,
      showSideMenu: true,
      addMenu: {
          picture: '',
          product_name: '',
          price: '',
          category: ''
      }
    }
  }
  openModal = (params) => {
    this.setState({
      showModal: params
    })
  }
  openSideMenu = () => {
      this.setState({
          showSideMenu: !this.state.showSideMenu
      })
  }
  onAdd = (product) => {
    const exist = this.state.cartItems.find((x) => x.id === product.id);
      if (exist) {
        this.setState({
          cartItems: this.state.cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x)
        })
      } else {
        this.setState({
          cartItems: [...this.state.cartItems, {...product, qty:1}]
        })
      }
  }
  onRemove = (product) => {
    const exist = this.state.cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      this.setState({
        cartItems: this.state.cartItems.filter((x) => x.id !== product.id)
      })
    } else {
      this.setState({
        cartItems: this.state.cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x)
      })
    }
  }
  onCancel = () => {
    this.setState({
      cartItems: [],
    })
  }
  render() {
    const {products} = data
    return (
      <Fragment>
        <Header countCartItems={this.state.cartItems.length} openSideMenu={this.openSideMenu}></Header>
        <section className='main-content'>
            {this.state.showSideMenu === true ? (
                <Fragment>
                <div className='main-content-left'>
                    <Sidebar></Sidebar>
                    <Main onAdd={this.onAdd} products={products} openSideMenu={this.openSideMenu}></Main>
                </div>
                <Basket onAdd={this.onAdd} onRemove={this.onRemove} cartItems={this.state.cartItems} openModal={this.openModal} onCancel={this.onCancel}></Basket>
                </Fragment>
            ) : (
                <Fragment>
                <div className='main-content-left'>
                    <Main onAdd={this.onAdd} products={products} openSideMenu={this.openSideMenu}></Main>
                </div>
                <Basket onAdd={this.onAdd} onRemove={this.onRemove} cartItems={this.state.cartItems} openModal={this.openModal} onCancel={this.onCancel}></Basket>
                </Fragment>
            )}
        </section>
        {
            this.state.showModal === true ? <Modal cartItems={this.state.cartItems} openModal={this.openModal}></Modal> : ''
          }
      </Fragment>
    )
  }
}

export default Home
