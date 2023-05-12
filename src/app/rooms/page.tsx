'use client'

import Link from 'next/link'
import Banner from '../components/Banner'
import Cover from '../components/Cover'
import RoomsContainer from '../containers/RoomContainer'

export default function Home () {
  return (
    <>
      <Cover coverClass='roomsHero'>
        <Banner title='our rooms'>
          <Link href='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Cover>
      <RoomsContainer />
    </>
  )
}
