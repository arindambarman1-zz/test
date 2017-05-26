import React, { Component } from 'react';
import CustomModal from './CustomModal.js'
import CustomTable from './CustomTable.js'
import Storage from './storage.js'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      fields: Storage.getFields() || []
    }
  }

  createNewEntry = (field) => {
    let fields = this.state.fields.concat([field])
    Storage.storeFields(fields)
    this.setState({fields: fields})
  }

  deleteField = (field) => {
    let fields = this.state.fields.filter((f) => {
      return f.email !== field.email
    })
    Storage.storeFields(fields)
    this.setState({fields: fields})
  }

  editField = (editedColumnValue, field, type) => {
    let fields = this.state.fields.map((f) => {
      if (f.email === field.email) {
        field[type] = editedColumnValue
        return field
      } else {
        return f
      }
    })
    Storage.storeFields(fields)
    this.setState({fields: fields})
  }

  showModal = () => {
    this.setState({showModal: true})
  }

  hideModal = () => {
    this.setState({showModal: false})
  }

  render() {
    return (
      <div className="custom-container">
        <div className="row">
          <div className="col-xs-6 col-xs-offset-3">
            <div className="row">
              <div className="col-xs-12">
                <button className="btn btn-success" onClick={() => { this.showModal() }}> New Entry </button>
              </div>
              <div className="col-xs-12">
                <CustomTable fields={this.state.fields} deleteField={this.deleteField} editField={this.editField} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <CustomModal showModal={this.state.showModal} 
                       closeModal={this.hideModal}
                       createNewEntry={this.createNewEntry} />
        </div>
      </div>
    );
  }
}
