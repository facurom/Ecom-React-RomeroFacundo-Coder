import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  console.log('products', products)
  return ( 
    products?.map(product => <Item key={product.id} product={product}/>))
}

export default ItemList