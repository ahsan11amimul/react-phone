import React, { Component } from 'react';
import Title from './Title';
import CartList from './CartList';
import CartTotal from './CartTotal';
import { ProductConsumer } from '../context';


export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {
                        value => {
                            const { cart } = value;
                            if (cart.length > 0) {
                                return (
                                    <>
                                        <Title name="Your" title="Cart" />
                                        <div className="container-fluid text-center d-none d-lg-block">
                                            <div className="row">
                                                <div className="col-10 mx-auto col-lg-2">
                                                    <p className="text-uppercase">Products</p>
                                                </div>
                                                <div className="col-10 mx-auto col-lg-2">
                                                    <p className="text-uppercase">Name of products</p>
                                                </div>
                                                <div className="col-10 mx-auto col-lg-2">
                                                    <p className="text-uppercase">Price</p>
                                                </div>
                                                <div className="col-10 mx-auto col-lg-2">
                                                    <p className="text-uppercase">Quantity</p>
                                                </div>
                                                <div className="col-10 mx-auto col-lg-2">
                                                    <p className="text-uppercase">Remove</p>
                                                </div>
                                                <div className="col-10 mx-auto col-lg-2">
                                                    <p className="text-uppercase">Total</p>
                                                </div>

                                            </div>
                                        </div>
                                        <CartList value={value} />
                                        <CartTotal value={value} />


                                    </>
                                )
                            } else {
                                return (
                                    <Title name="your cart is" title="Empty" />
                                );
                            }

                        }
                    }
                </ProductConsumer>

            </section>
        )
    }
}

