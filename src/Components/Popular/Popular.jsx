import React, { useEffect, useState } from 'react'
import './Popular.css'
// import data_product from '../Assets/data' //we removed this so as to import directly from the backend
import Item from '../Item/Item'

const Popular = () => {

  // to add backend popular in women api 
  const [popularProducts,setPopularProducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen')
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data));
  },[])

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular

// mount this to Shop.jsx file 
