import React from 'react'
import { connect } from 'react-redux'
import { getCharities } from '../actions/charities'
import Charity from '../components/Charity'
import {withRouter} from 'react-router-dom'
import CharityFormModal from '../components/CharityFormModal'
import Filters from '../components/Filters'
import { addCharity, editCharity } from '../actions/charities'
// import sprite from '../imgs/sprite.svg'

class CharityContainer extends React.Component {

  state = {
    modal: false,
    form: {
      image: '',
      name: '',
      category: '',
    },
  }

  toggleModal = () => this.setState({modal: !this.state.modal})

  onChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({form:
      {
        ...this.state.form,
        [name]: value
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    if (this.state.form.id) {
      this.props.editCharity(this.state.form)
    } else {
      this.props.addCharity(this.state.form)
    }
    this.setState({
      modal: false,
      form: {
      image: '',
      name: '',
      category: '',
      }
    })
  }

  componentDidMount(){
    this.props.getCharities()
  } 

  openNewCharityForm = () => this.setState({
    modal: true,
    form: {
      image: '',
      name: '',
      category: '',
    }
  })

  populateForm = (charity) => this.setState({
    modal: true,
    form: {
      image: charity.image,
      name: charity.name,
      category: charity.category
    }
  })

  renderMyCharities = () => {
    return (
      <>
        <button className="btn btn--charity" onClick={this.openNewCharityForm}>
        <svg className="icon icon--add">
          {/*<use href={sprite + '#icon-plus'} />*/}
        </svg>
          Charity</button>
          <section className="cards">
            {this.props.currentUser && this.props.charities.filter(charity => charity.user.id === this.props.currentUser.id).map(charity => <Charity key={charity.id} populateForm={this.populateForm} {...charity} currentOwner={true} />)}
          </section>
        <CharityFormModal toggle={this.toggleModal} {...this.state.form} display={this.state.modal} onChange={this.onChange} onSubmit={this.onSubmit}/>
      </>
    )
  }

  //need to test allCharities and searchedCharities further

  allCharities = () => {
    return this.props.charities
  }


  searchedCharities = () => {
    switch(this.props.searchOption) {
      case 'username':
        return this.allCharities().filter(charity => charity.user.username.toLowerCase().includes(this.props.search.toLowerCase()))
      default:
        return this.allCharities()
    }
  }

  filteredCharities = () => this.props.filter === 'All' ?  this.searchedCharities() : this.searchedCharities().filter(charity => charity.category.name === this.props.filter)

  sortedCharities = () => this.props.sort === 'alphabetically' 
    ? this.filteredCharities().sort((a, b) => a.name.localeCompare(b.name)) 
    : this.filterdCharities().sort((a, b) => b.date.localeCompare(a.date))

    //

  renderAllCharities = () => {
    return (
      <>
        <h2 className='heading-secondary'>All Charities</h2>
        <Filters />
        { !this.props.charities[0] && <div className="loader"></div> }
        <section className="cards">
          {this.props.charities && this.sortedCharities().map(charity => <Charity key={charity.id} {...charity} all={true} />)}
        </section>
      </>
    )
  }

  render(){
    return (
      <>
        { this.props.location.pathname === '/myprofile' ? this.renderMyCharities() : this.renderAllCharities() }
      </>
    )
  }
}

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser.currentUser,
      charities: state.charities.charities,
      ...state.charities.filtersForm
    }
  }
  export default withRouter(connect(mapStateToProps, {getCharities, addCharity, editCharity})(CharityContainer))
