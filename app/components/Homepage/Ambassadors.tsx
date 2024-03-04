import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { ambassadors } from '@/app/utils/data';
import Link from 'next/link';

const Ambassadors = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-col gap-10">
          <article className="flex flex-col items-center justify-center">
            <h3 className="text-3xl md:text-4xl font-bold max-w-[25ch] text-black">
              Meet our Ambassadors
            </h3>
          </article>

          <div className="grid gird-cols-1 gap-10 md:gap-0 md:grid-cols-4 justify-center items-center">
            {ambassadors.map((ambassador) => (
              <Link key={ambassador.id} target="_blank" href={ambassador.path}>
                <article className="flex flex-col gap-4 items-center">
                  <div className="relative">
                    <figure className="block h-[10rem] w-[10rem] border-4 overflow-hidden rounded-full">
                      <Image
                        className="w-full h-full object-full"
                        src={ambassador.image}
                        alt=""
                      />

                      <span className="absolute bg-primary text-white grid place-items-center h-[2rem] w-[2rem] bottom-2 right-2 rounded-full p-2">
                        <FaLinkedin size={14} />
                      </span>
                    </figure>
                  </div>
                  <span className="text-center">
                    <h4 className="font-bold">{ambassador.name}</h4>
                    <p className="text-xs">{ambassador.role}</p>
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Ambassadors;
