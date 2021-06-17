import { connect } from 'react-redux'
import { filterFormChange } from '../actions/charities'

const Filters = (props) => {
    return (
        <div className='form-container'>
            <form className='filters-form'>
                <div className='filters-form_group'>
                    <label className='filters-form_label'>Filter By</label>
                    <select className='filters-form_input' name='searchOption' onChange={props.filterFormChange} value={props.searchOption}>
                        <option value='category'>Category</option>
                        <option value='user'>User</option>
                    </select>
                </div>
                <div className='filters-form_group'>
                    <label className='filters-form_label'>Search</label>
                    <input className='filters-form_input' placeholder='Search' type="search" name="search" onChange={props.filterFormChange} value={props.search} />
                </div>
                <div className='filters-form_group'>
                    <label className='filters-form_label'>Category</label>
                    <select className='filters-form_input' name="filter" onChange={props.filterFormChange} value={props.filter} >
                    <option value="All">Show All</option>
                    <option value="Domestic-Needs">Domestic Needs</option>
                    <option value="International-Needs">Internation Needs</option>
                    <option value="Animal-Protection">Animal Protection</option>
                    <option value="Medical">Medical</option>
                    <option value="Youth">Youth</option>
                    <option value="Health">Health</option>
                    <option value="Environment">Environment</option>
                    </select>
                </div>
                <div className='filters-form_group'>
                    <label className='filters-form-label'>Sort By</label>
                    <select className='filters-form_input' onChange={props.filterFormChange} value={props.sort} name="sort">
                        <option value="alphabetically">Alphabetically</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state.charities.filtersForm
})

export default connect(mapStateToProps, { filterFormChange })(Filters)