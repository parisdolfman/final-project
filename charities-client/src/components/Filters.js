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
            </form>
        </div>
    )
}