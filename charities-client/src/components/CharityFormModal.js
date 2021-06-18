import React from 'react'

const CharityFormModal = props => {

  const display = props.display ? "block" : "none"
  const { image, category, name, toggle, onChange, onSubmit } = props
  
  return (
    <div id="myModal" className="modal" style={{ display }}>
      <div className="modal_content">
        <span onClick={toggle} className="close">&times;</span>
        <form className='charity-form' onSubmit={onSubmit}>
        <div className='charity-form_group'>
          <input className='charity-form_input' placeholder='Image URL' type="text" name="image"  onChange={onChange} value={image} required={true}/>
          <label className='charity-form_label' htmlFor='image'>Image URL</label>
        </div>
        <div className='charity-form_group'>
          <select className='charity-form_input' name="category" onChange={onChange} value={category} >
          <option value="Domestic-Needs">Domestic Needs</option>
                    <option value="International-Needs">Internation Needs</option>
                    <option value="Animal-Protection">Animal Protection</option>
                    <option value="Medical">Medical</option>
                    <option value="Youth">Youth</option>
                    <option value="Health">Health</option>
                    <option value="Environment">Environment</option>
          </select>
          <label className='charity-form__label' htmlFor='category'>Category</label>
        </div>
        <div className='charity-form_group'>
            <input className='charity-form_input' placeholder='Name' type="text" name="Name"  onChange={onChange} value={ame}/>
            <label className='charity-form_label' htmlFor='commonName'>Name</label>
        </div>
        <input className="btn btn--small" type="submit" value="Submit" />
      </form>
      </div>
    </div>
  )
}

export default CharityFormModal