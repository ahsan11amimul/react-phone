import React from 'react';
import { Link } from 'react-router-dom';

function CartTotal({ value }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={() => clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subTotal : <strong>$ {cartSubTotal}</strong>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Tax : <strong>$ {cartTax}</strong>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Total : <strong>$ {cartTotal}</strong>
                            </span>
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartTotal
