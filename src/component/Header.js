import React from 'react'

import {NavLink} from 'react-router-dom'




function Header(props) {



    return (

<div>
    <NavLink to='/'>home</NavLink>
    <NavLink to='/blog'>blog</NavLink>
</div>
    )
}

export default Header;