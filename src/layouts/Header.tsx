import { NavLink } from 'react-router'

const navList = [{
  name: '首頁',
  path: '/',
}, {
  name: '部落格',
  path: '/blog',
}]

export default function Header() {
  return (
        <header className="bg-soft-mist py-[24px] font-bold text-[28px]">
            <nav>
                <ul className="flex justify-center gap-[40px]">
                    {navList.map(item => (
                        <li key={item.path}>
                            <NavLink to={item.path}>{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
  )
}
