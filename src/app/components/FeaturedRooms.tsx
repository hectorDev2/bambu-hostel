import React, { useState } from 'react'
import Title from './Title'
import Loading from './Loading'
import Room from './Room'

export const FeaturedRooms = () => {
  const rooms: any = []
  const [isLoading, setIsLoading] = useState(false)

  const Rooms = rooms?.slice(3).map((room: any) => {
    return <Room key={room.id} room={room} />
  })
  return (
    <section className='featured-rooms'>
      <Title title='featured rooms' />
      <div className='featured-rooms-center'>
        {isLoading ? <Loading /> : Rooms}
      </div>
    </section>
  )
}
