import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="main-nav">
      <div className="nav-element">
        <img className="nav-img" src="#" alt="" />
        <ul className="nav-list">
          <li className="nav-text">
            <Link to={"/"} className='nav-dec'>Music Artist</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;