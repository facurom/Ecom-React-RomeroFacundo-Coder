
import { addDoc, arrayRemove, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../CartContext/CartContext";

const CartContainer = () => {
  const [dataForm, setDataForm]= useState({
    name: "",
    email:"",
    phone:""
  })
  const { cartList, vaciarCarrito, precioTotal, eliminarItem } = useCartContext();
  console.log(cartList);

  const generateOrder = (evt) => {
    evt.preventDefault()

    const order = {}
    order.buyer = dataForm
    order.item = cartList.map(({ nombre, id, price }) => ({ nombre, id, price }))

    const db = getFirestore()
    const queryOrder = collection(db,'orders')
    
    addDoc(queryOrder,order)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(() =>{
      vaciarCarrito()
      setDataForm({
        name: "",
        email:"",
        phone:""
      })
    })


    const addProduct = async () => {
      array.forEach(async element => {
        await addDoc(queryOrder, element)

      });
    }

    //const queryUpdate = doc(db, 'productos', '5uUtIlZHfFaVD1MXCjnD')
    //updateDoc(queryUpdate, {
    //stock: 30
    //})
    //  .then(() => console.log('ultima actualizacion'))

  }
  const handleOnChange = (e) =>{
    setDataForm({
      ...dataForm,
      [e.target.name] : e.target.value,
      [e.target.email] : e.target.value,
      [e.target.phone] : e.target.value
    })
  }
  return (
    <div>
      {cartList.map( product => 
        <li key={product.id}>
          <img src={product.foto} alt="" className="w-25" />
          {product.nombre} - Cantidad: {product.cantidad} - Precio{product.price}
          <button
            className="btn"
            onClick={() => eliminarItem(product.id)}
          > <i className="bi bi-x-circle"></i></button>
        </li>
      )}
      
      {precioTotal() > 0 && <label>El precio total es: {precioTotal()}</label>}<br />
      <form onSubmit= {generateOrder}>
        <div className="form-group w-58">
          <label htmlFor="name">Nombre Completo</label>
          <input 
          type="text" 
          className="form-control" 
          name="name" placeholder="Ingrese el nombre" 
          value={dataForm.name}
          onChange={handleOnChange}
          />
          <label htmlFor="email">email</label>
          <input type="text" 
          className="form-control" 
          name="email" placeholder="Ingrese el email" 
          value={dataForm.email}
          onChange={handleOnChange}
          />
           <input type="text" 
          className="form-control" 
          name="confirmarEmail" placeholder="Ingrese el email" 
          value={dataForm.email}
          onChange={handleOnChange}
          />
          <label htmlFor="tel">Tel</label>
          <input type="number" 
          className="form-control" 
          name="phone" placeholder="Ingrese el numero de telefono"
          value={dataForm.phone} 
          onChange={handleOnChange}
          />
           
        </div>
        <button className="btn btn-outline-danger" >
          Generar Orden
        </button>
      </form>




      <button className="btn btn-outline-danger" onClick={vaciarCarrito}>
        Vaciar Carrito
      </button>

    </div>
  );
};

export default CartContainer;