import { createContext, useState } from "react";


export const CartContext=createContext()

export const CartContexProvider=({children})=>{

    const[cart,setCart] =useState(0); 
    const handleCart=(a)=>{
        setCart(cart+a)
    }

    return <CartContext.Provider value={{cart,handleCart}}>
        {children}
    </CartContext.Provider>

}