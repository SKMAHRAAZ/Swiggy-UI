import React, { useState } from 'react'
import { item_data } from '../data'

const Displayitems = () => {
    const [displayitems, setDisplayItems] = useState(item_data)
  return (
    <section className="itemSection">
     {
        displayitems.map((item)=>{
            return(
                <div className='itemBox'>
                    <img src={item.item_img} alt="Abc" />
                </div>
            )
        })

     }
    </section>
  )
}

export default Displayitems