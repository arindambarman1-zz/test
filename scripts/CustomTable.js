import React, { Component } from 'react';
import EditableCell from './EditableCell.js'
export default class CustomTable extends Component {

  deleteField = (field) => {
    this.props.deleteField(field)
  }

  onEditCell = (editedColumn, field, type) => {
    this.props.editField(editedColumn, field, type)
  }

  render() {
    const columns = [{ key: "firstName", name: "First Name"},
                     { key: "lastName", name: "Last Name"},
                     { key: "email", name: "Email"},
                     { key: "address", name: "Address"}]
    return (
      <table className="table table-responsive custom-table">
        <thead>
          <tr>
            { columns.map((column) => {
                return <th key={column.key}>{column.name}</th>
              })
            }
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.fields.map((field) => {
              return <tr key={field.email}>
                <td><EditableCell type="firstName" params={field} onEdit={(t) => this.onEditCell(t, field, "firstName")} /></td>
                <td><EditableCell type="lastName" params={field} onEdit={(t) => this.onEditCell(t, field, "lastName")}/></td>
                <td><EditableCell type="email" params={field} onEdit={(t) => this.onEditCell(t, field, "email")} /></td>
                <td><EditableCell type="address" params={field} onEdit={(t) => this.onEditCell(t, field, "address")} /></td>
                <td> <span onClick={() => { this.deleteField(field) }}> Delete </span> </td>
              </tr>
            }) 
          }
        </tbody>
      </table>
    );
  }
}
