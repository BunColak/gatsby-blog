import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen transition-all dark:bg-gray-800 dark:text-white">
      <div className="container pb-20 mx-auto">
        <div className="mx-4 md:mx-auto md:w-2/3">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
