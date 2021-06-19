import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from '../components/Logout'
import sprite from '../imgs/sprite.svg'

const NavBar = props => {
  
  return (
    <nav className='nav '>
      {props.loggedIn ? 
        <>
        <div className='nav_link-container'>
          <NavLink className='nav_link' to="/">
            <span>
              <svg className="icon icon--nav">
                <use href={sprite + '#icon-home3'} />
              </svg>
              Home
            </span>
          </NavLink>
          <NavLink className='nav_link' to="/myprofile">
            <span>
              <svg className="icon icon--nav">
                <use href={sprite + '#icon-user'} />
              </svg>
              My Profile
            </span>  
          </NavLink>
          <NavLink className='nav_link' to="/charities">
          <span>
              <svg className="icon icon--nav">
                <use href={sprite + '#icon-heart'} />
              </svg>
              Charities
            </span>
          </NavLink>
        </div>
        <div className='nav_logout-container'>
          <Logout /> 
        </div>
        </>
        :
        <div className='nav__link-container'>
          <NavLink className='nav__link' to="/">
            <span>
              <svg className="icon icon--nav">
                <use href={sprite + '#icon-home3'} />
              </svg>
              Home
            </span>
          </NavLink>
          <NavLink className='nav__link' to="/signup">
            <span>
              <svg className="icon icon--nav">
                <use href={sprite + '#icon-quill'} />  
              </svg>
              Sign Up
            </span>
          </NavLink>
          <NavLink className='nav__link' to="/login">
            <span>
              <svg className="icon icon--nav">
                <use href={sprite + '#icon-unlocked'} />
              </svg>
              Login 
            </span>  
          </NavLink>
        </div>
      }
    </nav>
  )
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
  })
}

export default connect(mapStateToProps)(NavBar)