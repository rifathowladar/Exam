import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'
import Container from './layout/Container'
import { FaUser, FaHistory, FaCog } from 'react-icons/fa'

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: FaUser, end: true },
  { to: '/dashboard/orders', label: 'Order History', icon: FaHistory },
  { to: '/dashboard/settings', label: 'Settings', icon: FaCog },
]

const DashboardLayout = () => {
  return (
    <Container className="py-12">
      <div className="flex gap-8">
        <aside className="w-64 shrink-0">
          <h2 className="font-pop text-xl font-bold mb-6">My Account</h2>
          <nav className="flex flex-col gap-2">
            {links.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-pop text-sm transition-colors ${
                    isActive ? 'bg-primary text-white' : 'bg-gry text-gray-700 hover:bg-gray-200'
                  }`
                }
              >
                <Icon />
                {label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/shop"
            className="inline-block mt-6 text-primary font-pop text-sm hover:underline"
          >
            Continue Shopping →
          </Link>
        </aside>
        <div className="flex-1 min-w-0">
          <Outlet />
        </div>
      </div>
    </Container>
  )
}

export default DashboardLayout
