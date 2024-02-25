import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards' 
import Spinner from '../components/Spinner'
const apiUrl='https://fakestoreapi.com/products'


const Home = () => {
    const [products,setProduts]=useState([])
    const [loading,setLoading]=useState(false)

    async function getData(){
        setLoading(true)
        const data=await fetch(apiUrl)
        const res=await data.json()
        setProduts(res)
        setLoading(false)
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div className='mx-auto w-11/12 max-w-[1080px] min-h-[80vh] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols
    -1  gap-6 mt-10 mb-6'>
        {
            loading?(<div className='h-full w-[70vw] flex justify-center
            items-center'><Spinner/></div>):(products.length>0?(
                (products.map((product)=>{
                return <Cards product={product} key={product.id}/>
            }))
            ):<div>No data found Check Api</div>)
        }
    </div>
  )
}

export default Home