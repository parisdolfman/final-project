import React from 'react'
import { connect } from 'react-redux'
import { getCharities } from '../actions/charities'
import Charity from './components/Charity'
import {withRouter} from 'react-router-dom'
import CharityFormModal from './components/CharityFormModal'
import Filters from './components/Filters'
import { addCharity, editCharity } from '../actions/charities'
// import sprite from '../imgs/sprite.svg'


class PrivateRoute extends Component {

    componentDidMount() {
      this.props.authUser()
    }
  
    renderContent = props => {
      const { Component, currentUser } = this.props
      if (currentUser && currentUser.authBegin) {
        if (currentUser && !currentUser.currentUser.username) {
          return <Redirect to='/' />
        } else {
          return <Component {...props} />
        }
      }
    }
  
    render() {
      const { component: Component, currentUser, authUser } = this.props
      return <Route {...rest} render={(props) => (
        this.renderContent(props)
      )} />
    }
  }
  
  const mapStateToProps = (state) => {
    return { 
      currentUser: state.currentUser 
    }
  }
  
  
  export default connect(mapStateToProps, { authUser })(PrivateRoute)