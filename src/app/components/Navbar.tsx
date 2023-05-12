'use client'
import { FaAlignRight } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/logo.png'
import React, { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link href='/'>
            <Image src={Logo} alt='Hotel Booking' />
          </Link>
          <button type='button' className='nav-btn' onClick={handleToggle}>
            <FaAlignRight className='nav-icon' />
          </button>
        </div>
        <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/rooms'>Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
