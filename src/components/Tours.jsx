import React from 'react'
import Tour from './Tour'
import data from '../assets/data'


const Tours = () => {
  const tourData = data.map((oneTour) => {
    return (
      <Tour 
      key={oneTour.id}
      {...oneTour}
      />
    )
  })
  return (
    <div className='tours_container'>
      {tourData}
    </div>
  )
}

export default Tours