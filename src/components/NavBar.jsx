import { useEffect, useState } from 'react'
import './NavBar.css'

function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  // Transparent over the banner, solid once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav_bar ${scrolled ? 'nav_bar_scrolled' : ''}`}>
      <a href="#home_id" className="nav_name">
        Justin Balbuena<span className="nav_name_dot">.</span>
      </a>

      <div className="nav_links_sect">
        <a href="#home_id" className="nav_link nav_link_home">Home</a>
        <a href="#about_section_id" className="nav_link">About</a>
        <a href="#projects_section_id" className="nav_link">Projects</a>
      </div>
    </nav>
  )
}

export default NavBar
