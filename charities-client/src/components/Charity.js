import { connect } from 'react-redux'
import { deleteCharity } from '../actions/charities'
import { NavLink } from 'react-router-dom'

const Charity = props => {

    const onClick = () => {
        props.deletecharity(props.name)
    }

    return (
      <div className='card'>
          <div className='card_side card_side--front'>
              <img className='card_image' src={props.image}></img>
          </div>
      </div>
    )
}

export default 