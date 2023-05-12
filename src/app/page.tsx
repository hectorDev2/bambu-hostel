'use client'

import Link from 'next/link'
import styled from 'styled-components'
import Banner from './components/Banner'
import Cover from './components/Cover'
import { FeaturedRooms } from './components/FeaturedRooms'
import Services from './components/Services'

export default function Home () {
  return (
    <>
      <Cover>
        <Banner
          title='luxurious rooms'
          subtitle='deluxe rooms starting at $299'
        >
          <Link href='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Cover>
      <Services />
      <FeaturedRooms />
    </>
  )
}
