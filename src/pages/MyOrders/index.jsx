import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { ShoppingCartContext } from "../../context";
import  OrdersCard from "../../components/OrdersCard";

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext);
  console.log(order,'order')
  return (
    <Layout>
      <div className="flex items-center relative justify-center w-80 mb-6">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {order.map((order) => {
        return <Link key={order.key} to={`/my-orders/${order.id}`}>
          <OrdersCard
            dateNow = {order.date}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>;
      })}
    </Layout>
  );
};

export default MyOrders;
