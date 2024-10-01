'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Contact Us', href: '/contact-us' },
]

export const Nav = () => {
	const path = usePathname()
	console.log('🚀 ~ path:', path)
	return (
		<nav className="flex gap-4">
			{NAV.map(({ label, href }) => (
				<Link className={path === href ? 'bg-slate-400' : ''} key={label} href={href}>
					{label}
				</Link>
			))}
		</nav>
	)
}
