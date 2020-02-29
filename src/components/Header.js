import React from 'react'
import { Link, graphql } from 'gatsby'

const Header = ({data}) => {    
    return (
        <nav className="w-full flex justify-between h-16 items-center text-xl">
            <div>
                <Link className="border-0 no-underline" to='/'>Bün Colak's Personal Blog</Link>
            </div>
        </nav>
    )
}

export default Header
