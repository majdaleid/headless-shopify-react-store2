import React, { useContext } from 'react'
import styled from 'styled-components'
import { ShopContext } from '../context/shopContext'
import { Link as ReactRouterDomLink } from 'react-router-dom'

const Container = styled.div`

position: fixed;
  
  width: 300px;
  height: 100%;
   
  top: 0;
  left: ${props => props.isOpen ? '0' : '-100%'};
  
  background: white;
  transition: left 0.3s ease-in-out;
  z-index:1000;
`;

 
const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
`;

const DrawerHeader = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
`;



const VStack = styled.div`
padding:2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Link = styled(ReactRouterDomLink)`
  text-decoration: none;
  color: black;
`;

const NavMenu = () => {
  const { isMenuOpen, closeMenu,isOpen } = useContext(ShopContext)

  return (
    <Container isOpen={isMenuOpen}>
      <CloseButton onClick={closeMenu}>&times;</CloseButton>
        <DrawerHeader>Menu</DrawerHeader>
          <VStack>
            <Link to="/">About Us</Link>
            <Link to="/">Learn More</Link>
            <Link to="/">Sustainability</Link>
          </VStack>
       
    </Container>
  )
}

export default NavMenu;
