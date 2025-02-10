import React from 'react'
import { Link } from 'react-router-dom'
const TopbarSection = () => {
  return (
    <section className="Topbar">
        <div className="company">
        <Link to='/' className='link'><h2>Scrap</h2></Link>
        </div>
        <div className="search">
            <input type="text" placeholder='search ..' />
        </div>
        <div className="userAuth">
            Login / Signup
        </div>
    </section>
  )
}

export default TopbarSection