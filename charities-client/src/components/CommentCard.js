import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteComment, setFormDataEditComment, resetFormDataComment } from '../actions/charities'

class CommentCard extends Component {
    state = {
        modal: false 
    }

    onClick = (event) => {
      this.props.deleteComment(this.props.id)
    }

    onClickEdit = () => {
        this.setState({modal: true})
        this.props.setFormDataEditComment(this.props.description)
    }

    render(){
        const { username, description, currentUser, userId, id } = this.props
        return (
            <div className='comment'>
                <span className='comment_username'>{username}</span>
                <span className='comment_description'>{description}</span>
                {userId === currentUser.id &&
                  <span>
                      <a href="#bottom" onClick={this.onClickEdit}>
                      </a>
                  </span>
                  //modal for comment form
                }
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}

export defauly connect(mapStateToProps, { setFormDataEditComment })



