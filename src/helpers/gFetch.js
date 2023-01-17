export let products = [
    {id: '1', nombre: 'producto 1', categoria: 'makeup', stock: '100', price:'2500', foto:'https://i.pinimg.com/564x/34/a5/8f/34a58f3ec86fddf67b655e2c66b02624.jpg'},
    {id: '2', nombre: 'producto 2', categoria: 'cremasfaciales', stock: '100', price:'2000', foto:'https://tersapell.com/wp-content/uploads/2021/06/BaseFluidaOrganica701Ivory.jpg '},
    {id: '3', nombre: 'producto 3', categoria: 'makeup', stock: '100', price:'3500', foto:' https://cdn.shopify.com/s/files/1/0549/4544/8185/products/156_48c3d5d1-cf9c-4f83-a1b7-83fdc54fcdf8_2048x2048.png?v=1668794954 '},
]


export const gFetch = (id) => {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(id ? products.find (product => product.id ===id) : products)
      }, 1000 ) 
    })
}