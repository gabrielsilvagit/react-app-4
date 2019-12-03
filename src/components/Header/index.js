import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';
import { GiRunningShoe } from 'react-icons/gi';

import { Container, Cart, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <a href="/">
          <Logo>
            <h1>ROCKETSHOES</h1>
            <GiRunningShoe size={40} color="#fff" />
          </Logo>
        </a>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
