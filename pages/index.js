import React from 'react';
import Logo from '../components/logo';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="flex bg-blue-500">
            <div className="w-3/12 ">
              <Logo />
            </div>
            <div className="w-6/12">
              <Nav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
