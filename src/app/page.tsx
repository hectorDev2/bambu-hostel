'use client'
import Banner from './components/Banner'
import { Button } from './components/buttons/ButtonFeatures'
import { Comments } from './components/comments/Comments'
import Cover from './components/Cover'
import { FeaturedRooms } from './components/FeaturedRooms'
import Services from './components/Services'

export default function Home () {
  return (
    <>
      <Cover>
        <Banner
          title='Bambu hostel'
          subtitle='el mejor hostel en el centro historico del cusco'
        >
          <Button to='/rooms' title={'Habitaciones'} />
        </Banner>
      </Cover>
      <Services />
      <FeaturedRooms />
      <Comments />
    </>
  )
}
