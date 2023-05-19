import React from 'react'
import Title from './Title'
import Room from './Room'
import { useSelector } from 'react-redux'
import { StateSelector } from '../interfaces'

export const FeaturedRooms = () => {
  const rooms = useSelector(({ rooms }: StateSelector) => rooms.featuredRooms)

  const Rooms = rooms?.map((room: any) => {
    return <Room key={room.id} room={room} />
  })
  return (
    <section className='featured-rooms'>
      <Title title='featured rooms' />
      <div className='featured-rooms-center'>{Rooms}</div>
    </section>
  )
}
