import React from 'react'
import { useLocation,Link } from 'react-router-dom'

const BreadCrumbs = () => {
    const location = useLocation();
    console.log(location);
    let currentLink = '';
    const crumbs = location.pathname.split('/').filter((crumb)=> crumb !== "").map(crumb => {
        currentLink += `/${crumb}`
        return (
            <div className="crumb" key={crumb}>
            <Link to={currentLink}>{crumb}</Link>
          </div>
        )
    })
    console.log(crumbs)
  return (
    <div>
      {crumbs}
    </div>
  )
}

export default BreadCrumbs
