import { useContext} from "react";
import { Link } from "react-router-dom"
import { MdClose } from "react-icons/md";
import { ShoppingCartContext } from "../../context";
import { totalPrice } from "../../utils";
import OrderCard from "../OrderCard/index";
import './checkoutsidemenu.css'

const CheckoutSideMenu = () => {
 const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, setOrder, order, setCount} = useContext(ShoppingCartContext)

 const handleDelete = (id) => {
  const filteredProducts = cartProducts.filter(product => product.id !== id)
  setCartProducts(filteredProducts)
 }

 const handleCheckout = () => {
  const orderToAdd = {
    date:'01.02.23',
    products: cartProducts,
    totalProducts: cartProducts.length,
    totalPrice:totalPrice(cartProducts)
  }

  setOrder([...order, orderToAdd])
  setCartProducts([])
  setCount(0)
 }

  return (
    <aside className={`${ isCheckoutSideMenuOpen? 'flex': 'hidden'} checkout-side-menu`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <MdClose className="h-6 w-6 text-black cursor-pointer" onClick={() => closeCheckoutSideMenu()}/>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
      {
        cartProducts.map(product => {
          return (
            <OrderCard 
              key={product.id}
              title={product.title} 
              imageUrl={product.image}
              price={product.price}
              id={product.id}
              handleDelete={handleDelete}
            />
          )
        })
      }
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-5">
          <span className="font-light">Total: </span>
          <span className="font-medium text-2xl">${totalPrice(cartProducts)}</span>
        </p>
        <Link to="/my-orders/last">
          <button className="bg-black w-full py-3 text-white rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
        </Link>
        
      </div>

    </aside>
    
  )
}

export default CheckoutSideMenu
