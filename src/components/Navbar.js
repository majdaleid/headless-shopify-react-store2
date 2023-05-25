import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import styled from 'styled-components';
import {MdMenu, MdShoppingBasket} from 'react-icons/md'
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  padding: 20px;
`;

const IconContainer = styled.div`
  color: #FFA8E2;
  font-size: 24px;
  cursor: pointer;
`;

const ChecoutNummber= styled.div`
background:#ff38bd9e;
border-radius:50%;
text-align:center;

`

const Logo = styled(Link)`
  color: #FFA8E2;
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;
  img {
    width:7rem;
  }
`;

const Navbar = () => {
  const {openCart,openMenu,checkout}=useContext(ShopContext)
  
  return (
    <NavbarContainer>
      <IconContainer onClick={openMenu}>
        <MdMenu />
      </IconContainer>
      <Logo to="/"><img  src={`${process.env.PUBLIC_URL}/images/snowboard-logo.png`}/></Logo>
      <IconContainer onClick={openCart}>
        <MdShoppingBasket />
        <ChecoutNummber>{checkout.lineItems?.length}</ChecoutNummber>
      </IconContainer>
    
    </NavbarContainer>
  )
}

export default Navbar
