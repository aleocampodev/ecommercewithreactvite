import  {useState, useEffect } from 'react'
import { api } from '../../api'
import Layout from '@/components/Layout'
import Card from '@/components/Card'
import ProductDetail from '@/components/ProductDetail'


const Home = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch(`${api}/products`)
      .then(response => response.json())
      .then(data => setProducts(data))
  },[])

  return (
    <Layout>
      <div className="grid gap-4  grid-cols-4 w-full max-w-screen-lg">
        {
          products && products.map((product) => {
            return <Card key={product.id} data={product}/>
          })
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
