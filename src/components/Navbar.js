import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import styled from 'styled-components';
import logo from '../logo.svg';

export default class Cart extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="shop" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-items ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>

                </ul>
                <Link to="/cart" className="ml-auto nav-link">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>
                        </span>

                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}


`