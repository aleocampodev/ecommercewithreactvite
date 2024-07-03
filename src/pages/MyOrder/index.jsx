import React, {useContext} from "react"
import {Link, useParams} from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import { ShoppingCartContext } from "../../context";
import Layout from '../../components/Layout'
import OrderCard from "../../components/OrderCard/index";

const MyOrder = () => {
  const { order} = useContext(ShoppingCartContext)
  // const currentPath = window.location.pathname
  //console.log(currentPath.lastIndexOf('/') + 1) => 11
  //const index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  // const params = useParams()

  return (
    <Layout>
      <div className="flex items-center relative justify-center w-80 mb-6">
        <Link to='/my-orders' className="absolute left-0">
          <FaArrowLeft className="h-6 w-6 text-black cursor-pointer"/>
        </Link>
        <h1>My Order</h1>

      </div>
      <div className=" flex flex-col w-80">
      {
        //show last product in cart
        order?.slice(-1)[0]?.products?.map(product => {
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
