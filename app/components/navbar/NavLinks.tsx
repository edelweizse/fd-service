'use client';

import NavLink from './NavLink';

const NavLinks = () => {
  return (
    <div className='hidden sm:flex flex-row gap-5 items-center justify-between'>
      <NavLink route='/' label='Home' />
      <NavLink route='/menu' label='Menu' />
      <NavLink route='/about' label='About' />
      <NavLink route='/contact' label='Contact us' />
    </div>
  );
};

export default NavLinks;
