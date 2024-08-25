import React,{createContext, useEffect, useState} from "react";




export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for(let index = 0; index < 300+1; index++){
        cart[index] = 0;

    }
    return cart;
}
const ShopContextProvider = (props) => {

    const[all_product,setAll_Product] = useState([]);

    const [cartItems,setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('https://preject-final-backend.onrender.com/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))
        
        if(localStorage.getItem('auth-token')){
            fetch('https://preject-final-backend.onrender.com/getcart',{
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

   
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
       if(localStorage.getItem('auth-token')){
        fetch('https://preject-final-backend.onrender.com/addtocart',{
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


    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('https://preject-final-backend.onrender.com/removefromcart',{
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
        for(const item in cartItems){
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item] ;
            }
            
        }
        return totalAmount;
     }

     const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+=cartItems[item]
            }
        } 
       return totalItem;
     }


     const increaseQuantity = (itemId) => {
        setCartItems((prev) => {
            const newQuantity = prev[itemId] + 1;
            updateCartBackend(itemId, newQuantity);
            return { ...prev, [itemId]: newQuantity };
        });
    };
    
    const decreaseQuantity = (itemId) => {
        setCartItems((prev) => {
            const newQuantity = prev[itemId] > 1 ? prev[itemId] - 1 : 1;
            updateCartBackend(itemId, newQuantity);
            return { ...prev, [itemId]: newQuantity };
        });
    };
    
    // Helper function to update cart in the backend
    const updateCartBackend = (itemId, quantity) => {
        if (localStorage.getItem('auth-token')) {
            fetch('https://preject-final-backend.onrender.com/updatecart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId, quantity }),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error updating cart:', error));
        }
    };
    




    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart,decreaseQuantity,increaseQuantity};
return (
    <ShopContext.Provider value={contextValue}>
       {props.children}

    </ShopContext.Provider>
)

}
export default ShopContextProvider;
