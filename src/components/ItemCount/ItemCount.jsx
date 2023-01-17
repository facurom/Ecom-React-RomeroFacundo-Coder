import { useState } from "react";

export const ItemCount = ( { stock = 5, initial=1 ,onAdd } ) => {
    const [contador, setearContador] = useState(initial);
    const [booleano, setBooleano] = useState(true);
    const handleCount = () => {
      console.log(contador)
      if (contador < stock){
        
        setearContador(contador + 1)
      }
    };
    const restar = () => {if(contador> initial) setearContador(contador -1)}
    const handleOnAdd = () => onAdd(contador)
    return (
      <center className="mt-5">
        {contador}
        
        <button className="btn btn-outline-primary" onClick={handleCount}>
          +
        </button>
        
        <button className="btn btn-outline-primary" onClick={restar}>-</button>
        <button className="btn btn-outline-primary" onClick={handleOnAdd}>Agregar al carrito</button>
        <br></br> 
      </center>
      
    );
  };