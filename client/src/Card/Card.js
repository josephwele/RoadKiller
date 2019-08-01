import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ property }) => {
  const { index, picture, city, name, age, gender } = property
  return (
    <div id={`card-${index}`} className='card'>
      <img src={picture} alt={city} />
      <div className='details'>
        <span className='index'>{index + 1}</span>
        <p className='location'>
          {city}<br />
        </p>
        <ul className='features'>
          <li className='name'>{name} <span>name</span></li>
          <li className='age'>{age} <span>age</span></li>
          <li className='gender'>{gender} <span>gender</span></li>
        </ul>
      </div>
    </div>
  )
}

Card.propTypes = {
  property: PropTypes.object.isRequired
}

export default Card
