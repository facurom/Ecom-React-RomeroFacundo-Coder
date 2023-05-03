import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../helpers/gFetch";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true)
  const[product, setProduct] = useState({})
  const { productoId } = useParams();
  
  useEffect(()=>{
  //  const db = getFirestore()
  //  const queryDoc = doc (db, 'productos', productoId )

  //  getDoc(queryDoc)
  //  .then(respuesta => setProduct( { id: respuesta.id, ...respuesta.data()}))
  //  .catch (err => console.log(err))
  fetch('http://localhost:8080/api/productos')
  .then(resp => resp.json)
  .then(resp => setProduct(resp.payload))
  .catch(err => console.log(err))
  .finally(() => setLoading)
  }, [])
  return (
    <ItemDetail
       product={product}
    />
    
  );
};

export default ItemDetailContainer;