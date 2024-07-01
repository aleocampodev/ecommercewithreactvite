import { useContext} from "react";
import { MdClose } from "react-icons/md";
import { ShoppingCartContext } from "../../context";
import { totalPrice } from "../../utils";
import OrderCard from "../OrderCard/index";
import './checkoutsidemenu.css'

const CheckoutSideMenu = () => {
 const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts} = useContext(ShoppingCartContext)

 const handleDelete = (id) => {
  const filteredProducts = cartProducts.filter(product => product.id !== id)
  setCartProducts(filteredProducts)
 }

  return (
    <aside className={`${ isCheckoutSideMenuOpen? 'flex': 'hidden'} checkout-side-menu`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <MdClose className="h-6 w-6 text-black cursor-pointer" onClick={() => closeCheckoutSideMenu()}/>
      </div>
      <div className="px-6 overflow-y-scroll">
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
      <div className="px-6 ">
        <p className="flex justify-between items-center">
          <span className="font-light">Total: $</span>
          <span className="font-medium text-2xl">{totalPrice(cartProducts)}</span>
        </p>
      </div>
    </aside>
    
  )
}

export default CheckoutSideMenu
