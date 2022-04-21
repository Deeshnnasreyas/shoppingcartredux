import React from 'react'

function Home(props) {
    const products=[{
        id:"1",
        pice:"1000",
        name:"i phone 5",
        des:"Some quick example text to build on the card title",
        image:"https://www.bing.com/th?id=OIP.81KQgFZGrk0p2OVc7FDOHQHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
    },
    {
        id:"2",
        pice:"1000",
        name:"i phone 11",
        des:"Some quick example text to build on the card title",
        image:"https://www.bing.com/th?id=OIP.hKPROmBhSuK_GfQhTSeEeQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
    },
    {
        id:"2",
        pice:"1000",
        name:"i phone 11",
        des:"Some quick example text to build on the card title",
        image:"https://www.bing.com/th?id=OIP.CTpVBeL-wHpY8MOiqoDeAQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
    }]
    const productsshoe=[{
        id:"1",
        pice:"1000",
        name:"i phone 5",
        des:"Some quick example text to build on the card title",
        image:"https://www.bing.com/th?id=OIP.Ba4h9_tvtxgiohVn3dcikgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
    },
    {
        id:"2",
        pice:"1000",
        name:"i phone 11",
        des:"Some quick example text to build on the card title",
        image:"https://www.bing.com/th?id=OIP.w0DcJHZIJbQbB4bfsc3SuwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
    },
    {
        id:"2",
        pice:"1000",
        name:"i phone 11",
        des:"Some quick example text to build on the card title",
        image:"https://www.bing.com/th?id=OIP.MMTF0-eGmDqptS-sg4Dq-AHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
    }]
    return (
        <div>
           
            <h2 className='heading'>Shoes</h2>
            <div className='cart-wraper-container'>
            {products.map((item) =>(
                
            <div className="cart-wrapper">
                <div className="img-wrapper-item">
                    <img src={item.image} alt=""/>
                </div>
                <div className="btn-wrapper-item">
                    <span>{item.name}</span>
                    <p>{item.des}</p>
                    <span>${item.pice}</span>
                </div>
                <div className="btn-wrapper-item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                       Buy Now</button>
                </div>
          
            </div>
            ))}
            </div>
            <h2 className='heading'>Bagspacks</h2>
            <div className='cart-wraper-container'>
            {productsshoe.map((item) =>(
                
                <div className="cart-wrapper">
                <div className="img-wrapper-item">
                    <img src={item.image} alt=""/>
                </div>
                <div className="btn-wrapper-item">
                    <span className='spantext'>{item.name}</span>
                    <p>{item.des}</p>
                    <span className='spantext'>${item.pice}</span>
                </div>
                <div className="btn-wrapper-item">
                    
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                       Buy Now</button>
                </div>
          
            </div>
            ))}
            </div>
        </div>
    )
}
export default Home