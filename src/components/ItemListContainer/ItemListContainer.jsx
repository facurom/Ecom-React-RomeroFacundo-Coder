import { useEffect, useState } from "react";
import { gFetch } from "../../helpers/gFetch";
import {Link, useParams} from 'react-router-dom';
import Formulario from "../Formulario/formulario";
import Titulo from "../Titulo/Titulo";
import { ItemCount } from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { collection, doc, getDoc , getDocs, getFirestore, where, query } from 'firebase/firestore';


const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const {categoriaId} = useParams()
  

  useEffect(()=>{
    
    // if (categoriaId) {
    //   const db = getFirestore ()
    // const queryCollection = collection(db, 'productos')
    // const queryFiltrada = query(queryCollection, where('categoria', '==', categoriaId))
    // getDocs (queryFiltrada)
    // .then(respuesta =>setProducts(respuesta.docs.map(product => ({ id: product.id, ...product.data()}) )))
    // .catch(err => console.log(err))
    // .finally(() => setLoading(false))
      
    // } else {
    //   const db = getFirestore ()
    // const queryCollection = collection(db, 'productos')
    
    // getDocs(queryCollection)
    // .then(respuesta =>setProducts(respuesta.docs.map(product => ({ id: product.id, ...product.data()}) )))
    // .catch(err => console.log(err))
    // .finally(() => setLoading(false))
    // }
    fetch ('http://localhost:8080/api/productos')
    .then (resp => {
      if (!res.ok) throw new Error (res.status); 
      return res.json();
    })
    .then((data) =>{
      setProducts(data);
    }) 
    .catch(err => console.log(err))
    .finally(() => setLoading(false))

  }, [categoriaId]);

  console.log(products)

  return (
    <>
      <h2>{saludo}</h2>
      <Titulo
        titulo={"Preparados magistrales"}
        subtitulo={"Linea 100% organica de maquillaje"}
      />
      <Formulario />
      
      

      {loading ? (
        <h2>Cargando productos ...</h2>
      ) :  (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <ItemList products={products}/>
        </div>
        
        
      )}
      
    </>
  );
};

export default ItemListContainer;