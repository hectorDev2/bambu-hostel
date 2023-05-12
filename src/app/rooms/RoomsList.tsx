import React from 'react'
import Room from '../components/Room'

const RoomsList = ({ rooms }: any) => {
  if (rooms?.length === 0) {
    return (
      <div className='empty-search'>
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    )
  }

  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {rooms.map((item: any) => {
          return <Room key={item.id} room={item} />
        })}
      </div>
    </section>
  )
}

export default RoomsList
