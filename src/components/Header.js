import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

const Header = () => {
  const [theme, setTheme] = useState()

  useEffect(() => {
    if(!theme) {
      setTheme(localStorage.getItem('theme'))
    } else if (theme !== localStorage.getItem('theme')) {
      localStorage.setItem('theme', theme)
      window.setTheme()
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
        <nav className="flex items-center justify-between w-full h-16 text-xl">
            <div>
                <Link className="no-underline border-0" to='/'>Bün Colak&apos;s Personal Blog</Link>
            </div>
            <button className="text-sm bg-transparent border-none dark:text-white" onClick={toggleTheme}>lights {theme === 'light' ? 'off' : 'on'}</button>
        </nav>
  )
}

export default Header
