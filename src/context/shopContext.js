import React, { useState, useEffect, createContext ,useCallback} from 'react';
import Client from 'shopify-buy';

export const ShopContext = createContext(); // Change here (also capitalized the first letter)


const client = Client.buildClient({
    domain:process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken:process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN,
  });


const ShopProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [checkout, setCheckout] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchAllProducts = useCallback(async () => {
    const products = await client.product.fetchAll();
    setProducts(products);
  }, []); // Here is where you use useCallback

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]); // fetchAllProducts is now stable and won't change on each render


  useEffect(() => {
    if (localStorage.getItem("checkout_id")) {
      fetchCheckout(localStorage.getItem("checkout_id"));
    } else {
      createCheckout();
    }
}, []);

const createCheckout=async ()=>{
    const checkout=await client.checkout.create();
    localStorage.setItem("checkout_id",checkout.id)
    setCheckout(checkout)
}

const fetchCheckout=(checkoutId)=>{
    client.checkout.fetch(checkoutId)
    .then((checkout)=>{
        setCheckout(checkout)
    })
}

const addItemtoCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10)
      }
    ];
  
    if (checkout.id) {
      const newCheckout = await client.checkout.addLineItems(
        checkout.id,
        lineItemsToAdd
      );
      setCheckout(newCheckout);
      openCart();
    } else {
      console.error('Checkout ID is null');
    }
  };
  

const removeLineItem= async (lineItemIdsRemove)=>{
    const checkoutId=checkout.id

    client.checkout.removeLineItems(checkoutId, lineItemIdsRemove).then((checkout) => {
        // Do something with the updated checkout
       setCheckout(checkout)// Checkout with line item 'gid://shopify/CheckoutLineItem/194677729198640?checkout=e3bd71f7248c806f33725a53e33931ef' removed
      });
  
}



  const fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    console.log(product);
    setProduct(product);
  };

  const closeCart = () => {
    // Add logic to close the cart
   setIsCartOpen(false)
  };

  const openCart = () => {
    // Add logic to open the cart
    setIsCartOpen(true)
  };

  const closeMenu = () => {
    // Add logic to close the menu
    setIsMenuOpen(false)
  };

  const openMenu = () => {
    // Add logic to open the menu
    setIsMenuOpen(true)
  };

  console.log(product); // Logging product

  return (
    <ShopContext.Provider // Change here
      value={{
        product,
        products,
        checkout,
        isCartOpen,
        isMenuOpen,
        fetchAllProducts,
        fetchProductWithHandle,
        closeCart,
        openCart,
        closeMenu,
        openMenu,
        addItemtoCheckout ,
        removeLineItem 
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
