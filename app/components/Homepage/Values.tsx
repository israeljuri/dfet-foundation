import React from 'react';
import Container from '../Container';
import { values } from '@/app/utils/data';

const Values = () => {
  return (
    <article className="py-5 md:py-10">
      <Container>
        <div className="grid gap-8">
          <article className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <article
                key={value.id}
                className="flex flex-col gap-8 p-5 rounded-xl"
              >
                <div className="relative inline-block">
                  <span className="text-6xl text-primary relative z-10">
                    {value.icon}
                  </span>
                  <span className="h-[4rem] w-[4rem] bg-slate-100 absolute -z-10 -top-2 left-3 rounded-full"></span>
                </div>

                <p className="text-gray-500 max-w-[35ch]">
                  {value.description}
                </p>

                <div className="flex justify-start">
                  <h4 className="text-2xl capitalize font-bold  ">
                    <span>{value.title}</span>
                  </h4>
                </div>
              </article>
            ))}
          </article>
        </div>
      </Container>
    </article>
  );
};

export default Values;
