'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Logo = () => {
	const router = useRouter();
	return ( 
		<Link href='/'>
			<div className='flex cursor-pointer items-center justify-center'>
				<Image 
					alt='logo'
					className='hidden md:block'
					height='40'
					width='40'
					src='/images/logo.svg'
				/>
				<h1 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary text-2xl pl-2 pt-1">
					FD
				</h1>
			</div>
		</Link>
	 );
}
 
export default Logo;