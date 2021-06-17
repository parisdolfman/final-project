import React from 'react'
import { connect } from 'react-redux'
import { commentFormUpdate, editComment, setComment } from '../actions/charities'

const commentForm = (props) => {

    const { description } = props.commentForm

    const onSubmit = event => {
        event.preventDefault()
        if (props.commentId) {
            props.editComment(props.form, props.commentId)
            props.toggle()
        } else {
            props.submitComment({ description: props.form.description, charity_id: props.charity_id})
        }
    }
    
    return (
        <form onSubmit={onSubmit}>
            <textarea className='textarea' name="description" required={true} value={content} onChange={props.commentFormUpdate} placeholder='Comment'></textarea>
            <input className="btn btn-small btn-small-submit-comment" type="submit" value="SEND"/>
        </form>
    )
}

const mapStateToProps = state => ({
    form: state.charities.commentForm,
})

export default connect(mapStateToProps, {commentFormUpdate, editComment, submitComment })(CommentForm)