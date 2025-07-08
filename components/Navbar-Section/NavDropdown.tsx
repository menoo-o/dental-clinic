// components/NavDropdown.tsx
import Link from 'next/link'

type NavLink = {
  href: string
  label: string
}

type Props = {
  links: NavLink[]
}

const NavDropdown = ({ links }: Props) => {
  return (
    <div className="mt-4 space-y-4 px-4">
      {links.map(link => (
        <Link key={link.href} href={link.href} className="block text-gray-700">
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default NavDropdown
