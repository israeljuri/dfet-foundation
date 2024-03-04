'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assests/dfet-foundation-logo.png';
import Link from 'next/link';
import { navItems } from '@/app/utils/data';
import { BiHeart } from 'react-icons/bi';
import Container from './Container';
import { SlMenu, SlClose } from 'react-icons/sl';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const currentPath = usePathname();

  return (
    <nav className="w-full">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="block">
              <Image
                className="w-full h-[2.8rem] md:h-[3.5rem]"
                src={logo}
                alt=""
              />
            </Link>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <li
                  key={item.id}
                  className={`transition-all font-semibold text-gray-500 hover:text-gray-800 ${
                    isActive && 'text-primary'
                  }`}
                >
                  <Link href="">{item.label}</Link>
                </li>
              );
            })}
          </ul>

          <button
            className="text-4xl block md:hidden"
            onClick={() => setShow(!show)}
          >
            {show && <SlClose className="text-3xl" />}
            {!show && <SlMenu className="text-2xl" />}
          </button>

          {show && (
            <ul className="w-full flex md:hidden flex-col items-center gap-5 border-t mt-4 py-5">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <li
                    key={item.id}
                    className={`transition-all font-semibold text-2xl text-gray-500 hover:text-gray-800 ${
                      isActive && 'text-primary'
                    }`}
                  >
                    <Link href="">{item.label}</Link>
                  </li>
                );
              })}

              <div className="grid w-full">
                <button className="btn btn-md btn-primary btn-outline">
                  Send a donation
                  <BiHeart />
                </button>
              </div>
            </ul>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
