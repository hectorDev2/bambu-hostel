import React from 'react'
import { useSelector } from 'react-redux'
import RoomsFilter from '../rooms/RoomsFilter'
import RoomsList from '../rooms/RoomsList'

interface StateSelector {
  rooms: {
    roomsList: []
  }
}

const RoomsContainer = () => {
  const rooms = useSelector(({ rooms }: StateSelector) => rooms.roomsList)

  // if (loading) {
  //   return <Loading />
  // }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={rooms} />
    </>
  )
}

export default RoomsContainer
