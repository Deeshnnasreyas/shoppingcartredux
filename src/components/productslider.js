import React from 'react'



function Productslider() {
  return (
    
    <div className='Cardcontainer' >     
    <div className="Card" style={{background:"#ffd500"}}>
    <p>Watch</p> 
     <img src='./watch.jpg' alt='' width={40} height={40} style={{background:"#ffd500"}}/> 
     
     
    </div>
    <div className="Card" style={{background:"#e94e69"}}>
    <p>Bag</p> 
     <img src='./bag.jpg' alt=''width={30} height={30}/> 
     
     
    </div>
    <div className="Card" style={{background:"#00bbff"}}>
    <p>Shoes</p> 
     <img src='./shoe.jpg' alt='' width={30} height={30}/> 
     
     
    </div>
  
    
    
    </div>
  
  )
}

export default Productslider