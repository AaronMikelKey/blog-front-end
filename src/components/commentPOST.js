import React, { useState } from 'react'
import 'regenerator-runtime/runtime'

class NewComment extends React.Component {

  constructor(props) {
  super(props)
}

  render() {
    return (
    <div className='modal' id='modal'>
      <div className='modal-background' onClick={this.props.onClose}></div>
      <div className='modal-content'>
      <form>
        <div className='formcontrol'>
        <label className='label has-text-white' htmlFor='text'>Comment: </label>
        <textarea className='textarea' name='text' value={ this.props.value } onChange={ this.props.onChange }></textarea>
        </div>
        <br />
        <button className='button is-success' onClick={ this.props.onSubmit }>Add comment</button>
      </form>
      </div>
      <button className='modal-close is-large' aria-label='close' onClick={this.props.onClose}></button>
    </div>
    )
  }
}

export default NewComment