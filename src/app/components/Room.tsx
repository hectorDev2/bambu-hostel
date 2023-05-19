import React from 'react'
import defaultImg from '../assets/images/room-1.jpeg'
import { RoomObject } from '../interfaces'
import Image from 'next/image'
import { Button } from './buttons/ButtonFeatures'
interface Room {
  room: RoomObject
}

const Room = ({ room }: Room) => {
  const { name, images, price, slug } = room
  return (
    <article className='room'>
      <div className='img-container'>
        <Image src={images[0] || defaultImg} alt='single room' />
        <div className='price-top'>
          <h6>${price}</h6>
          <p>por noche</p>
        </div>
        <Button
          className='room-link'
          title='caracteristicas'
          to={`/rooms/${slug}`}
        />
      </div>
      <p className='room-info'>{name}</p>
    </article>
  )
}
// console.log(props);

export default Room

// React.memo
// Class components can bail out from rendering when their input props are
// the same using PureComponent or shouldComponentUpdate. Now you can do the
// same with function components by wrapping them in React.memo.
