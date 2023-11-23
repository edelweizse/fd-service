'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='bg-background h-full pt-12'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col mt-10 lg:my-auto mx-16'>
            <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary'>
              Food delivery
            </h1>
            <p className='text-lg text-text mt-5 font-medium gap-3 mb-5'>
              Craving a delicious meal but don&apos;t feel like cooking?
              <br />
              FD is your one-stop shop for fast and flavorful food delivery.
              <br />
              With a wide variety of cuisines to choose from,
              <br />
              FD delivers your favorite dishes right to your doorstep.
              <br />
              Whether you&apos;re in the mood for pizza, pasta, burgers, or
              something in between,
              <br />
              <span className='text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary mt-6'>
                FD has something for everyone.
              </span>
            </p>
            <Link
              href='/menu'
              className='bg-accent hover:shadow-md hover:bg-primary text-background font-bold py-2 px-4 rounded-full max-w-sm text-center justify-center'
            >
              Order now
            </Link>
          </div>
          <div className='items-center justify-center rounded-full h-auto w-auto m-auto md:my-20 hidden lg:flex'>
            <Image
              src='/images/round.png'
              width='564'
              height='564'
              alt='dish'
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </>
  );
}
