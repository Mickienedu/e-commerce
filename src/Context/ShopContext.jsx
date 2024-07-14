// to filter product like menubar,women,shoes 
import React, { createContext, useEffect, useState } from "react";
// import all_products from "../Components/Assets/all_product";

export const ShopContext = createContext(null);
 // addtocart function 
 const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    // getting all the product from the API
    const [all_products,setAll_Products] = useState([]);

    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
    fetch('http://localhost:4000/allproducts')
    .then((response)=>response.json())
    .then((data)=>setAll_Products(data))

    if (localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/getcart',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:"",
        }).then((response)=>response.json())
        .then((data)=>setCartItems(data));
    }
    },[])

    //add product in our cart
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1})) //import to productdisplay.jsx file
        // console.log(cartItems);
        if (localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }
    //remove product from our cart
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if (localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
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