import type { ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { profile } from '../data/profile'

type Props = {
  children: ReactNode
}

const sections = [
  { id: 'experience', label: '经历' },
  { id: 'skills', label: '技能' },
  { id: 'projects', label: '项目' },
  { id: 'contact', label: '联系' },
] as const

export function Layout({ children }: Props) {
  const navigate = useNavigate()
  const location = useLocation()

  function goSection(id: string) {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    navigate('/')
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <div className="site">
      <nav className="site-nav" aria-label="主导航">
        <Link to="/" className="brand">
          {profile.name}
        </Link>
        <ul className="nav-links">
          {sections.map((section) => (
            <li key={section.id}>
              <button type="button" className="nav-btn" onClick={() => goSection(section.id)}>
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {children}
      <footer className="site-footer">
        © {new Date().getFullYear()} {profile.name} · 作品集
      </footer>
    </div>
  )
}
