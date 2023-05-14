'use client'

import Link from 'next/link'
import Banner from '../components/Banner'
import { Button } from '../components/buttons/ButtonFeatures'
import Cover from '../components/Cover'
import RoomsContainer from '../containers/RoomContainer'

export default function Home () {
  return (
    <>
      <Cover coverClass='roomsHero'>
        <Banner title='Nuestras Habitaciones'>
          <Button to={'/'} title={'Regresar'} />
        </Banner>
      </Cover>
      <RoomsContainer />
    </>
  )
}
