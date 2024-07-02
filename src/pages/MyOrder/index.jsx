import React, {useContext} from 'react'
import { ShoppingCartContext } from "../../context";
import Layout from '../../components/Layout'
import OrderCard from "../OrderCard/index";

const MyOrder = () => {
  const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, setOrder, order, setCount} = useContext(ShoppingCartContext)
  return (
    <Layout>
      Hola my order
      <div className=" flex flex-col w-80">
      {
        //show last product in cart
        order.slice(-1)[0].products.map(product => {
          return (
            <OrderCard 
              key={product.id}
              title={product.title} 
              imageUrl={product.image}
              price={product.price}
              id={product.id}
            />
          )
        })
      }
      </div>
    </Layout>
  )
}

export default MyOrder
