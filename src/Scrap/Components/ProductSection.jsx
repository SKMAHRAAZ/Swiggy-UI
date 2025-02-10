import React, { useEffect, useState } from 'react'
import { API_URL } from '../api'
import { useParams } from 'react-router-dom'
import TopbarSection from './TopbarSection'



const ProductSection = () => {
  
    const {firmId, firmname} = useParams()




    const[products, setProducts] = useState([])
    const productHandler = async()=>{
        const response = await fetch(`${API_URL}/product/${firmId}/all-products`)
        const data = await response.json()
        console.log(data.products)
        setProducts(data.products)
    }
    useEffect(()=>{
        productHandler()
    },[])
  return (
    <>
    <TopbarSection/>
    <section className="productSection">
    <h3 style={{textAlign:"center"}}>{firmname}</h3><br /><br />
     {products.map((item)=>{
        return(
            <>
          
            <div className="productBox">
              <div>
                
              <div>
                <strong>{item.productname}</strong>
                </div>
                <div>₹ {item.price}</div>
                <div>{item.description}</div>
              </div>
            
            <div className="productImg">
                <img src={`${API_URL}/uploads/${item.image}`} alt="" />
                <div className='btn'>Add</div>
            </div>
            </div>
            

            </>
        )
     })}
    </section>
    </>
  )
}

export default ProductSection