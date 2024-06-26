import { useContext} from "react";
import { ShoppingCartContext } from "../../context";
import { MdClose } from "react-icons/md";
import './checkoutsidemenu.css'

const CheckoutSideMenu = () => {
 const {isCheckoutSideMenuOpen, closeCheckoutSideMenu} = useContext(ShoppingCartContext)
 console.log(isCheckoutSideMenuOpen, 'checkou')

  return (
    <aside className={`${ isCheckoutSideMenuOpen? 'flex': 'hidden'} checkout-side-menu`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <MdClose className="h-6 w-6 text-black cursor-pointer" onClick={() => closeCheckoutSideMenu()}/>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
