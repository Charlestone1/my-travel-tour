import React from 'react'
import {MdLocationOn} from "react-icons/md"

const Tour = (props) => {
  return (
    <>
        <div className='tour_container'>
            <div className='tour_image' style={{backgroundImage:`url(${props.imageSrc})` }}>
            </div>
            <div className='tour_details'>
                <div className='tour_location'>
                    <p><span><MdLocationOn /></span> {props.country}</p>
                    <a href={`${props.googleMap}`} target="_blank"> View on Google Maps</a>
                </div>
                <h2>{props.name}</h2>
                <div className='tour_desc'>
                    <p className='tour_duration'>{props.duration}</p>
                    <p className='tour_description'>{props.desc}</p>
                </div>
            </div>
        </div>
        <hr/>
    </>
  )
}

export default Tour