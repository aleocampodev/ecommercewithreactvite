import  {useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import Card from '@/components/Card'
import { api } from '../../api'

const Home = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch(`${api}/products`)
      .then(response => response.json())
      .then(data => setProducts(data))
  },[])
  return (
    <Layout>
      Hola home
      <div className="grid gap-4  grid-cols-4 w-full max-w-screen-lg">
        {
          products && products.map((product) => {
            return    <Card key={product.id} data={product}/>
          })
        }
      </div>
   
    </Layout>
  )
}

export default Home
