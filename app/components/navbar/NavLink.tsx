'use client';

import Link from 'next/link'

interface NavLinksProps {
	route: string;
	label: string;
}

const NavLinks = ({route, label}: NavLinksProps) => {
	return ( 
		<Link href={route}>
				<span className="text-md mr-7 font-semibold text-text hover:text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
					{label}
				</span>
		</Link>
	 );
}
 
export default NavLinks;