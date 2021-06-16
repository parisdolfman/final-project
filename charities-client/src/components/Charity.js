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
              <img className='card_image' src={props.image} alt={props.name}></img>
              <h2 className='heading-tertiary'>Charity Name: {props.name}</h2>
              {props.all && <h2 className='heading-tertiary'> Added By: {props.user.username} </h2> }
          </div>
          <div className='card_side card_side--back'>
              <div className='card_content'>
                  <h2 className='heading-charity'>Category: {props.category.name}</h2>
              </div>

          </div>
      </div>
    )
}

export default connect(null, {deleteCharity})(Charity);