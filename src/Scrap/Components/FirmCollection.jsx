import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import { API_URL } from '../api'

const FirmCollection = () => {
    const [firmData, setFirmData] = useState([])
    const [selectedregion, setSelectedregion] = useState("All")
    const [activebutton, setActivebutton] = useState("all")
  


    const firmHandler = async () => {
       try {
        const response = await fetch(`${API_URL}/vendor/all-vendors`)
        const data = await response.json()

        setFirmData(data.vendors)
        
        
        console.log(data)
        
       } catch (error) {
        console.log(error)
        alert("failed to fetch data")
        
       }
    }


    const regionHandler = (region,filter) => {
        setSelectedregion(region)
        setActivebutton(filter)
    }







    useEffect(() => {
        firmHandler()
    }, [])






    return (


        <>

           











            <div className="firm">
                <div className="filter-section">
                    <button onClick={() => regionHandler("All", "all")} className={activebutton==="all"?"active":''}>All</button>
                    <button onClick={() => regionHandler("South-Indian", "south-indian")} className={activebutton==="south-indian"?"active":''}>South-Indian</button>
                    <button onClick={() => regionHandler("North-Indian","north-indian")} className={activebutton==="north-indian"?"active":''}>North-Indian</button>
                    <button onClick={() => regionHandler("Chinese", "chinese")} className={activebutton==="chinese"?"active":''}>Chinese</button>
                    <button onClick={() => regionHandler("Bakery" ,"bakery")} className={activebutton==="bakery"?"active":''}>Bakery</button>
                </div>
                <h3>Restaurants with online food delivery in Hyderabad</h3>
            </div>
            <section className="firmCollection">


                {firmData.map((apple) => {
                    return apple.firm.map((item) => {
                        if (selectedregion === "All" || item.region.includes(selectedregion.toLocaleLowerCase())) {
                            return (

                                <Link to={`/products/${item._id}/${item.firmname}`} className='link'>
                                    <div className='firmGroup'>
                                        <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmname} />
                                        <div className="firmOffer">
                                            {item.offer}
                                        </div>
                                        <div className="firmDetails">
                                            <p><strong>{item.firmname}</strong></p>
                                            <div className="firm-rem">
                                                <p>{item.region.join(", ")}</p>
                                            </div>
                                            <div className='firm-rem'>
                                                <p>{item.area}</p>
                                            </div>
                                        </div>
                                    </div>

                                </Link>








                            )
                        }
                    })
                    return null;








                })}











            </section >








        </>




     
    )
}

export default FirmCollection