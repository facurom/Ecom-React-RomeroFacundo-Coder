
import { useCartContext } from "../CartContext/CartContext" 

const CartWidget = () => {
    const { cantidadTotal } = useCartContext()
  return (
    <div>
        { cantidadTotal () > 0 && cantidadTotal() }
        <i className="bi bi-cart4"></i>
    </div>
  )
}

export default CartWidget