import { NavLink,Outlet } from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs'

const Rootlayout = () => {
  return (
    <div className='root-layout'>
    <header>
    <nav>
        <h1>jobarouter</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='help'>Help</NavLink>
        <NavLink to='careers'>Careers</NavLink>
    </nav>
    <BreadCrumbs/>
  </header>
  <main>
  <Outlet/>
  </main>
  </div>
  )
}

export default Rootlayout
