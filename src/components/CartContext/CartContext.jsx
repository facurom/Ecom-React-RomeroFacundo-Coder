import { createContext, useContext, useState } from "react";




export const CartContext = createContext([])  
export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])
    
    
    const addtoCart = (product) => {
        const idx = cartList.findIndex(product => product.id == product.id)
        if (idx == -1) {
            setCartList([
                ...cartList,
                product
            ])
        } else {
            cartList[idx].cantidad += product.cantidad
            setCartList( [ ...cartList ] )
        }
        

    }

    const vaciarCarrito = () => setCartList([])
    const precioTotal = () => cartList.reduce((contador, product) => contador += (product.cantidad * product.price) , 0)

    const cantidadTotal = () => cartList.reduce((contador, product) => contador += product.cantidad , 0)

    const eliminarItem = ( id ) => setCartList (cartList.filter(product => product.id !== id ))



    return(
        <CartContext.Provider value={{
            cartList, 
            addtoCart,
            vaciarCarrito,
            cantidadTotal,
            precioTotal,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}