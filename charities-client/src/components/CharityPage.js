import React, { Component } from 'react'
import { connect} from 'react-redux'
import { setSelectedCharity, unsetCharity } from '../actions/charities'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'
// import sprite from '../imgs/sprite.svg'

class CharityPage extends Component {

    componentDidMount(){
      const id = this.props.match.params.id
      this.props.setSelectedCharity(id)
    }
  
    componentWillUnmount(){
      this.props.unsetCharity()
    }
  
    render() {
      const { image, name, category } = this.props
      return (
        <>
        <div className='charity-page row u-center-text'>
          { !this.props.id && <div className="loader"></div> }
          <div className='col-1-of-2'>
            <h1 className='heading-secondary' >{ name }</h1>
            <img className='charity-page__image' src={ image } alt={ name }></img>
            <h2 className='heading-tertiary'>Category: { category && category.name }</h2>
          </div>
          <div className='info'>
            <p>
              <span className='charity-page-info u-margin-top-medium' >Added by: { username } </span>
            </p>
          </div>
        </div>
          <div className='comment-container'>
            { comments && comments.length > 0 ? <h3 className='heading-secondary'>Comments:</h3> : null}
            <div className='comment-container_box'>
              { comments && comments.map(comment => <CommentCard key={comment.id} {...comment} />)}
            </div>
            <h4 className='charity-page-info'>Add Comment:</h4>{ this.props.currentUser.id && <CommentForm charity_id={ id } />}
          </div>
      </>
      )
    }
  }
  