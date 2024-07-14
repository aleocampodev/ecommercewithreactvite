/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { api } from '../api'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const [productShow, setProductShow] = useState({})
  const [cartProducts, setCartProducts] = useState([])
  const [order, setOrder] = useState([])
  const [products, setProducts] = useState(null)
  const [filteredProducts, setFilteredProducts]= useState(null)
  const [searchByTitle, setSearchByTitle] = useState(null)

  useEffect(() => {
    fetch(`${api}/products`)
      .then(response => response.json())
      .then(data => setProducts(data))
  },[])



  console.log('filteredItems', filteredProducts)

  const filteredProductByTitle = (products, searchByTitle) => {
    return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(()=> {
    if(searchByTitle) setFilteredProducts(filteredProductByTitle(products, searchByTitle))
  },[products,searchByTitle])

  const openProductDetail = () =>  setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
   
 
    

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productShow,
      setProductShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order, 
      setOrder,
      products,
      setProducts,
      searchByTitle,
      setSearchByTitle,
      filteredProducts
    }}>
      {children}
    </ShoppingCartContext.Provider>

  )
}