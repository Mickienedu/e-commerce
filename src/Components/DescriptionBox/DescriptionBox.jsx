import React from 'react'
import  './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="discriptionbox-nav-box">Description</div>
        <div className="discriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that
            facilitate buying and selling of products or services over the internet
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ab aut nemo! Molestias corporis architecto aliquam quod 
            quibusdam quae voluptate, illo velit sapiente hic quis expedita modi quo ducimus saepe.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque vero doloremque et magnam labore! Hic, modi aut assumenda quas, reiciendis tenetur
             repellat totam praesentium corporis vero sint consectetur odit repellendus.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
//mount to our product.jsx page 