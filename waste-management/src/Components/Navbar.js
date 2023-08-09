import React from 'react'

function Navbar() {
  
    const Navi = ["HOME","ANALYSIS","MAP","ABOUT"]
  
    return (
    <div className='Navbar'>
        <div className='Navi'>
           {Navi.map((Navi) => <h3 className='items'>{Navi}</h3>)}
        </div>
    </div>
  )
}

export default Navbar