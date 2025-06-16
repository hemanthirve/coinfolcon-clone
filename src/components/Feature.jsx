import React from 'react'

const Feature = ({image, title, subtitle}) => {
  return (
    <div className='feature'>
      
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p className='feature-para'>{subtitle}</p>
      </div>
    
  )
}

export default Feature;
