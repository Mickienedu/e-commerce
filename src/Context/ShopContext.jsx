// to filter product like menubar,women,shoes 
import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/all_product";
import Product from "../Pages/Product";

export const ShopContext = createContext(null);
 // addtocart function 
 const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    //add product in our cart
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1})) //import to productdisplay.jsx file
        console.log(cartItems);
    }
    //remove product from our cart
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        let intemInfo = all_products.find((Product)=>Product.id===Number(item))
                        totalAmount += intemInfo.new_price * cartItems[item];
                    }
            }
            return totalAmount;
    }
    // to get the total item in the cart 
    const getTotalCartItems = () => {  //send to navbar using usecontext
        let totalItem = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        totalItem += cartItems[item];
                    }
            }
            return totalItem
        }
    const contextValue = {getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart}; //access the getTotalCartItem to navbar file

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

// wrap to index.js file