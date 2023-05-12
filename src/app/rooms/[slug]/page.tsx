'use client'

import Banner from '@/app/components/Banner'
import { ButtonNetworks } from '@/app/components/buttonNetworks/ButtonNetworks'
import StyledCover from '@/app/components/StyledCover'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../globalRedux/store'
import { RoomSelect } from '../../interfaces/roomSelect'
export default function RoomDetail () {
  const rooms = useSelector((state: RootState) => state.rooms.roomsList)

  const [roomSelect, setRoomSelect] = useState<RoomSelect>()
  const params = useParams()

  const getRoom = (slug: string, rooms: any) => {
    const tempRooms = [...rooms]
    const room = tempRooms.find((room: any) => room.slug === slug)
    return room
  }
  useEffect(() => {
    if (rooms) {
      setRoomSelect(getRoom(params.slug, rooms))
    }
  }, [rooms, params.slug])

  if (!roomSelect) {
    return (
      <div className='error'>
        <h3>no such room could be found...</h3>
        <Link href='/rooms' className='btn-primary'>
          back to rooms
        </Link>
      </div>
    )
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images
  } = roomSelect
  const [mainImg, ...defaultImg] = images

  return (
    <>
      <StyledCover img={mainImg}>
        <Banner title={`${name} room`}>
          <Link href='/rooms' className='btn-primary'>
            back to rooms
          </Link>
        </Banner>
      </StyledCover>

      <section className='single-room'>
        <div className='single-room-images'>
          {defaultImg.map((item: any, index: any) => (
            <>
              <Image key={index} src={item} alt={name} />
            </>
          ))}
        </div>
        <div className='single-room-info'>
          <article className='desc'>
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className='info'>
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity:{' '}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{breakfast && 'free breakfast included'}</h6>
          </article>
        </div>
      </section>
      <section className='room-extras'>
        <h6>extras</h6>
        <ul className='extras'>
          {extras.map((item: string, index: number) => {
            return <li key={index}> - {item}</li>
          })}
        </ul>
        <ButtonNetworks />
      </section>
    </>
  )
}
