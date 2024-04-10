import React from "react";
import axois from 'axios';
import Link from 'next/link';
const Nav = () => {
  const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/create', key:' create', label: ' create ' },
    { href: '/read', key:'read', label: 'read' },
    { href: '/update', key:'update', label: 'update' },
  ];
  return (
<>
<div className='container mx-auto p-1'>

<ul className="container mx-auto p-1 hidden lg:flex gap-12 font-bold items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                <p className="text-4xl text-black  hover:text-yellow-800">
                    {link.label}
                </p>

                </Link>
              </li>
            ))}
          </ul>
          </div>
          </>
  )
}

export default Nav