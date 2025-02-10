import React, { useEffect, useState } from 'react'
import { API_URL } from '../api'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MagnifyingGlass } from 'react-loader-spinner'
import { Link } from 'react-router-dom';



const ChainSection = () => {
    const [vendorData, setVendorData] = useState([])
    const [scrollPosition, setScrollPosition] = useState("")
    const [loading, setLoading] = useState(true)


    const ScrollHandler = (direction) => {
        const scrollAmount = 500
        const gallery = document.getElementById("chainSection")
        if (direction === "left") {
            gallery.scrollTo({
                left: gallery.scrollLeft - scrollAmount,
                behavior: "smooth"
            })
        } else if (direction === "right") {
            gallery.scrollTo({
                left: gallery.scrollLeft + scrollAmount,
                behavior: "smooth"
            })


        }
    }


    const FirmHandler = async () => {
        const response = await fetch(`${API_URL}/vendor/all-vendors`)
        const data = await response.json()
        setVendorData(data.vendors)
        setLoading(false)
        console.log(data)
    }
    useEffect(() => {
        FirmHandler()
    }, [])
    return (
        <>
        <div className="loaderSection">
          {loading ? (
            <>
              <div className="loader">
                Your 🥣 is Loading...
              </div>
              <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="magnifying-glass-loading"
                wrapperStyle={{}}
                wrapperClass="magnifying-glass-wrapper"
                glassColor="#c0efff"
                color="#e15b64"
              />
            </>
          ) : (
            <>
              <div className="top">
                <h3>Top restaurant chains in Hyderabad</h3>
                <div className="btn-section">
                  <button onClick={() => ScrollHandler("left")}>
                    <FaArrowAltCircleLeft className="arrow" />
                  </button>
                  <button onClick={() => ScrollHandler("right")}>
                    <FaArrowAltCircleRight className="arrow" />
                  </button>
                </div>
              </div>
      
              <div className="chainSection" id="chainSection" onScroll={(e) => setScrollPosition(e.target.scrollLeft)}>
                {vendorData.map((apple, index) => (
                  apple.firm.map((item, firmIndex) => (
                   <Link to={`/products/${item._id}/${item.firmname}`} className='link'>
                    <div className="firmImage" key={`${index}-${firmIndex}`}>
                      <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmname} />
                    </div>
                   
                   
                   
                   </Link>
                  ))
                ))}
              </div>
            </>
          )}
        </div>
      </>
      
    )
}

export default ChainSection