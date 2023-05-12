import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Title from '../components/Title'
import { StateSelector } from '../interfaces'
import { filterRooms, initialState, setFilter } from './RoomSlice'

interface IPropsRoomsFilter {
  rooms: any[]
}

// Get all unique items
const getUnique = (items: any[], value: string): any => {
  const allRoomTypes: string[] = Array.from(
    new Set(items.map(room => room[value]))
  )

  return allRoomTypes
}

const RoomsFilter = ({ rooms }: IPropsRoomsFilter) => {
  const filters = useSelector(({ rooms }: StateSelector) => rooms.filters)
  const { type, capacity, maxPrice, minPrice, price, minSize, maxSize } =
    filters

  const dispatch = useDispatch()

  let types = getUnique(initialState.roomsList, 'type')
  types = ['all', ...types]

  let people = getUnique(rooms, 'capacity')

  const handleChange = (e: any) => {
    const { name, value } = e.target
    const payload = {
      name,
      value
    }
    dispatch(setFilter(payload as any))
  }

  const handleChecked = (event: any) => {
    const value = event.target.checked
    const name = event.target.name

    const payload = {
      name,
      value
    }
    dispatch(setFilter(payload as any))
  }

  useEffect(() => {
    dispatch(filterRooms())
  }, [filters])
  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        {/* select type */}
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types.map((item: any, index: number) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            })}
          </select>
        </div>
        {/* end of select type */}
        {/* guest */}
        <div className='form-group'>
          <label htmlFor='capacity'>guests</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          >
            {people.map((item: any, index: number) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            })}
          </select>
        </div>
        {/* end of guest */}

        {/* extras */}
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              onChange={handleChecked}
            />
            <label htmlFor='breakfast'>breakfast</label>
          </div>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              onChange={handleChecked}
            />
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  )
}

export default RoomsFilter
