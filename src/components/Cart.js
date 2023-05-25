import React, { useContext } from 'react';
import styled from 'styled-components';
import { ShopContext } from '../context/shopContext';
import { MdClose } from 'react-icons/md';

const CartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background: white;
  padding: 20px;
  box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 1;
`;

const headerEmtpyCart=styled.h3 `
padding-top:1.2rem;
@media (max-width: 768px) {
    width: 100%;
    padding:0;
    margin:0;
    h3{
        margin-top:1.2rem;
        margin-left: ${({ checkout }) => (checkout && checkout.lineItems && checkout.lineItems.length > 0 ? '0rem' : '2rem')};

    }
   
  
  }
`
const CloseButton = styled(MdClose)`
  font-size: 1rem;
  cursor: pointer;
 
  @media (max-width: 768px) {
    font-size: 2rem;
    
   
    margin-top:2rem;
    margin-bottom:0rem;
   
  }
`;

const CheckoutButton = styled.button`
  padding: 10px 20px;
  background-color: #ffa8e2;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    
   padding:0;
   height:5%;
   margin:auto;

  }

`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d3d3d3;
  padding: 10px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  padding-top:1rem;
  }

`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  

`;

const CartItemImage = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  margin-right: 10px;

  @media (max-width: 768px) {
   
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: red;
 
  @media (max-width: 768px) {
    
   text-align:center;
   
   }
 
`;

const CartItemPrice = styled.p`
  color: #888;
  display:flex;
`;

const CartItemTitle = styled.h3`
  font-size: 1rem;
  color: #333;
  display:flex;
  @media (max-width: 768px) {
    
    padding-top:1rem;
    
    }
`;


 

  
const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext);
 
  return (
    <CartContainer isOpen={isCartOpen}>
      <CloseButton onClick={closeCart} />
      <h2>Your Shopping Cart</h2>
     {checkout.lineItems?.length?checkout.lineItems && checkout.lineItems.map(item => {
        return (
        <CartItem key={item.id}>
          <CartItemImage src={item.variant.image.src} alt={item.title} />
          <CartItemDetails>
            <CartItemTitle>{item.title}</CartItemTitle>
            <CartItemPrice>${item.variant.priceV2.amount}</CartItemPrice>
          </CartItemDetails>
          <RemoveButton onClick={() => removeLineItem(item.id)}>Remove</RemoveButton>
        </CartItem>
        )
}):<headerEmtpyCart>Empty Cart</headerEmtpyCart>}
      {checkout.lineItems?.length?
      <CheckoutButton onClick={(e) => {
    e.preventDefault();
    window.location.href = checkout.webUrl;
  }}>
        <a href={checkout.webUrl}>Checkout</a>
        </CheckoutButton>:null
         }
    </CartContainer>
  )
}

export default Cart;
