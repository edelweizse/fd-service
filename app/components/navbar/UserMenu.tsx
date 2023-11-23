'use client';

import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={toggleOpen}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-40 bg-text overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label='Orders' />
                <Link href='/menu' className='sm:hidden'>
                  <MenuItem label='Menu' />
                </Link>
                <Link href='/about' className='sm:hidden'>
                  <MenuItem label='About' />
                </Link>
                <Link href='/contact' className='sm:hidden'>
                  <MenuItem label='Contact us' />
                </Link>
                <hr className='bg-background' />
                <MenuItem onClick={() => signOut()} label='Logout' />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label='Login' />
                <MenuItem onClick={registerModal.onOpen} label='Sign up' />
                <Link href='/menu' className='sm:hidden'>
                  <MenuItem label='Menu' />
                </Link>
                <Link href='/about' className='sm:hidden'>
                  <MenuItem label='About' />
                </Link>
                <Link href='/contact' className='sm:hidden'>
                  <MenuItem label='Contact us' />
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
