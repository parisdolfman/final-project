import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteComment, setFormDataEditComment, resetFormDataComment } from '../actions/charities'
import  CommentFormModal from '../containers/CommentFormModal'
// import sprite from '../imgs/sprite.svg'

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

    toggleModal = () => {
        this.setState({modal: !this.state.modal})
        this.props.resetFormDataComment()
    }

    render(){
        const { username, description, currentUser, userId, id } = this.props
        return (
            <div className='comment'>
                <span className='comment_username'>{username}</span>
                <span className='comment_description'>{description}</span>
                {userId === currentUser.id &&
                <>
                  <span>
                      <span>
                          <a href="#bottom" onClick={this.onClickOfEdit}>
                              <svg className="icon icon--edit-comment u-margin-left-small">
                                  {/*<use href={sprite + '#icon-pencil2'} />*/}
                              </svg>
                          </a>
                      </span>
                      <span>
                          <a href="#bottom" onClick={this.onClick}>
                              <svg className="icon incon--trash-comment">
                               {/*<use href={sprite + '#icon-bin2'} />*/}
                              </svg>
                          </a>
                      </span>
                  </span>
                  <CommentFormModal dislay={this.state.modal} toggle={this.toggleModal} commentId={id} description={description}/>
                  </>
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

export default connect(mapStateToProps, { setFormDataEditComment, resetFormDataComment, deleteComment })(CommentCard)



