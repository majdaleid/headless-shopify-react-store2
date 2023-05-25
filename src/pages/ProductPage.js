import React, { useEffect, useContext, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ShopContext } from '../context/shopContext';

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 500px;
`;

const ProductDetails = styled.div`
  flex: 1;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
  }
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin-top: 1rem;
`;

const ProductDescription = styled.p`
  margin-top: 1rem;
  text-align: justify;
  color: #666;
   padding-right:6rem;
  @media (max-width: 768px) {
    
    padding-right:0;
    
    }
`;

const AddButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #ffa8e2;
  border: none;
  color: white;
  cursor: pointer;

`;

const ProductPage = () => {
  let { handle } = useParams();

  const {
    fetchProductWithHandle: fetchProductWithHandleContext,
    fetchAllProducts: fetchAllProductsContext,
    addItemtoCheckout,
    product,
    products,
  } = useContext(ShopContext);

  const fetchProductWithHandle = useCallback(fetchProductWithHandleContext, []);
  const fetchAllProducts = useCallback(fetchAllProductsContext, []);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!product.title) return <div>Loading...</div>;

  return (
    <ProductWrapper>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductContainer>
        <ProductImage src={product.images[0] ? product.images[0].src : ''} />
        <ProductDetails>
          {product.variants ? (
            <ProductPrice>{`Price: ${product.variants[0].price.amount} ${product.variants[0].price.currencyCode}`}</ProductPrice>
          ) : (
            ''
          )}
          <ProductDescription>{product.description}</ProductDescription>
          <AddButton onClick={() => addItemtoCheckout(product.variants[0].id, 1)}>Add to Cart</AddButton>
        </ProductDetails>
      </ProductContainer>
    </ProductWrapper>
  );
};

export default ProductPage;
