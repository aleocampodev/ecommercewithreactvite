import { useState } from 'react'
import Home from '../Home'
import MyAccount  from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'

const App = () => {

  return (
      <div>
        <Home />
        <MyAccount />
        <MyOrder />
        <MyOrders />
        <NotFound/>
        <SignIn />
      </div>
  )
}

export default App
