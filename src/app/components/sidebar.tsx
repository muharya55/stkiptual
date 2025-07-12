'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'


type MenuItem = {
  label: string;
  href: string;
};
 
interface SidebarProps {
  data: MenuItem[];
}

export default function Sidebar({ data }: SidebarProps) {
  const pathname = usePathname();


  return (
    <ul className="nav service-menu">
      {data.map((item) => (
        <li key={item.href} className={pathname === item.href ? 'active' : ''}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}
