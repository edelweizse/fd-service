'use client';

import { User } from '@prisma/client';
import Container from '../Container';
import Logo from './Logo';
import NavLinks from './NavLinks';
import UserMenu from './UserMenu';

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className='fixed w-full bg-background z-10 shadow-sm'>
      <div className='py-1 border-b-[1px]'>
        <Container>
          <div className='flex flex-row items-center gap-3 lg:gap-0 justify-between'>
            <Logo />
            <NavLinks />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
