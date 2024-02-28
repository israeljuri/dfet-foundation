import React from 'react';

const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-full max-w-screen-lg mx-auto p-4 h-full">{children}</div>
  );
};

export default Container;
