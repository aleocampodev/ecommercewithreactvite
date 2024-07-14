import  { useContext } from 'react'
import Layout from '@/components/Layout'
import Card from '@/components/Card'
import ProductDetail from '@/components/ProductDetail'
import { ShoppingCartContext } from '../../context'


const Home = () => {
 const {products, setSearchByTitle, searchByTitle, filteredProducts} = useContext(ShoppingCartContext)

 const handleChange = (e) =>{
  setSearchByTitle(e.target.value)
 }

 const renderView = () => {
  if(searchByTitle?.length > 0){
    if(filteredProducts?.length > 0){
      return (
        filteredProducts?.map(item => (
          <Card  key={item.id} data={item}/>
        ))
      )
    }else{
      return(
        <div>We don't have anything</div>
      )
    }
  }else{
    return (products && products.map((product) => {
      return <Card key={product.id} data={product}/>
    }))
  }
 }

  return (
    <Layout>
      <div className="flex items-center relative justify-center w-80 mb-6">
        <h1 className="font-medium text-xl">Home</h1>
      </div>
      <input 
        type="text"
        placeholder="Search a Product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:online-none"
        onChange={(e)=> handleChange(e)}
     />
      <div className="grid gap-4  grid-cols-4 w-full max-w-screen-lg">
        {
         renderView()
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
