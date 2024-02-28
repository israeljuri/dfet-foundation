import React from 'react';
import heroImage from '@/app/assests/hero.jpg';
import { BiHeart } from 'react-icons/bi';
import Image from 'next/image';
import Container from '../Container';

const Header = () => {
  return (
    <header className="bg-slate-100 ">
      <Container>
        <div className="h-screen grid grid-cols-1 md:grid-cols-[1.5fr_2fr]">
          <div className="grid items-center py-8 md:py-0">
            <article className="flex flex-col gap-5 text-gray-800">
              <h1 className="text-4xl md:text-5xl text-black font-bold max-w-[18ch]">
                By Fighting Inequality, We’re Beating Poverty.
              </h1>
              <p className="text-gray-500 max-w-[50ch]">
                DFET Foundation is the first African decentralised organization
                giving back to the community using blockchain technology.
              </p>

              <div className="grid md:flex items-center gap-1 mt-5">
                <button className="btn btn-md btn-primary">
                  Become a volunteer
                </button>
                <button className="btn btn-md btn-link">
                  Send a Donation
                  <BiHeart />
                </button>
              </div>
            </article>
          </div>

          <figure className="mask md:mask-parallelogram-2 bg-slate-100 h-full w-full overflow-hidden relative rounded-md">
            <Image
              alt=""
              src={heroImage}
              className="w-full h-full object-cover scale-150 transition-all"
            />
          </figure>
        </div>
      </Container>
    </header>
  );
};

export default Header;
