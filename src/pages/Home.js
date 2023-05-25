import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import styled from 'styled-components';
import Hero from '../components/Hero';
import ImageWithText from '../components/ImageWithText';
import RichText from '../components/RichText';
const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 10px;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  opacity: 80%;

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: black;
  text-align: center;
  padding: 10px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  if (!products) return <div>loading...</div>;

  return (
    <>
      <Hero />
      <RichText 
       heading="The thrill you've been craving for"
       text="Our Snowboard Extravaganza guarantees an exhilarating, action-packed, and vibrant adventure on the slopes"
      />
      <ProductsGrid>
        {products.map((product) => (
          <ProductContainer key={product.id}>
            <ProductLink to={`/products/${product.handle}`} key={product.id}>
             
              <ProductImage src={product.images[0] ? product.images[0].src : ''} />
              {product.title}
              {product.variants
                ? `Price: ${product.variants[0].price.amount} ${product.variants[0].price.currencyCode}`
                : ''}
            </ProductLink>
          </ProductContainer>
        ))}
      </ProductsGrid>
      <RichText 
       heading="Elevate your snowboarding experience and treat yourself to unmatched thrills on the slopes."
      
      />
      <ImageWithText reverse button text="Discover a world of limitless possibilities as you embark on an unforgettable snowboarding journey. Our collection of cutting-edge snowboards will ignite your passion, empowering you to carve through the snow with precision and style. From freestyle tricks to high-speed descents, embrace the exhilaration and make your mark on the mountain" image={`${process.env.PUBLIC_URL}/images/boards.jpg`}
        heading="Unleash Your Snowboarding Passion"  />
        <ImageWithText button text="Gear up and hit the slopes with unwavering confidence. Our top-of-the-line helmets and snowboards are designed to provide optimal safety and performance, empowering you to push your limits and conquer any challenge that comes your way. Whether you're carving through fresh powder or tackling steep descents, trust in our reliable equipment to enhance your skills and elevate your snowboarding experience to new heights"  image={`${process.env.PUBLIC_URL}/images/helmet_skiman.jpg`}
        heading="Conquer the Mountain with Confidence"  />
    </>
  );
};

export default HomePage;
