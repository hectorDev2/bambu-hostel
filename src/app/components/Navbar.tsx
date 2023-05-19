"use client";
import { FaAlignRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import { useState } from "react";
import { ButtonNetworks } from "./buttons/ButtonNetworks";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link href="/">
            <Image src={Logo} alt="Hotel Booking" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link key={1} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link key={2} href="/rooms">
              Rooms
            </Link>
          </li>
          <li>
            <Link key={3} href="/rooms">
              Eventos
            </Link>
          </li>
          <li>
            <ButtonNetworks />
          </li>
        </ul>
      </div>
    </nav>
  );
};
