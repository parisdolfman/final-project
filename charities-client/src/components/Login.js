import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, getCurrrentUser } from '../actions/currentUser.js'
import { withRouter, Redirect } from 'react-router-dom'

class Login extends Component {
    
    componentDidMount() {
        this.props.getCurrrentUser()
    }

    state = {
        username: '',
        password: ''
    }

    onChange = event => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.login(this.state, this.props.history)
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <>
            { !this.props.leggedIn ?
                <div className='auth-form-container'>
                    <form className='auth-form u-margin-top-big' onSubmit={this.onSubmit}>
                        <div className="u-margin-bottom-medium">
                            <h2 className="heading-secondary u-margin-left-medium">
                                Login
                            </h2>
                        </div>
                    <div className='auth-form_group'>
                        <input className='auth-form_input' placeholder="username" value={this.state.username} name="username" type="text" onChange={this.onChange} />
                        <label htmlFor="username" className="auth-form_label">Username</label>
                        </div>
                <div className="auth-form_group">
                    <input className='auth-form_input' placeholder="password" value={this.state.password} name="password" type="password" onChange={this.onChange} />
                    <label htmlFor="password" className="auth-form_label">Password</label>
                </div>
                <div className="auth-form_group">
                    <input className='btn u-margin-left-medium' type="submit" value="Log In" />
                </div>
                    </form>
                </div >
                    : <Redirect to='/' />
            }
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        loggedIn: !!state.currentUser
    }
}

export default withRouter(connect(mapStateToProps, { login, getCurrentUser })(Login))