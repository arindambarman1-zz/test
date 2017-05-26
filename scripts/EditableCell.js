import React, { Component } from 'react';
export default class EditableCell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: false,
      text: props.params[props.type]
    }
  }

  closeEditor = (e) => {
    if (e.keyCode === 13) {
      this.setState({editable: false})
    }
  }

  changeCellValue = (e) => {
    this.setState({text: e.target.value})
    this.props.onEdit(this.state.text)
  }

  clickCell = () => {
    this.setState({editable: true})
  }

  render() {
    let text = this.state.text
    if (this.state.editable) {
      return (
        <input type="text" value={text} onChange={this.changeCellValue} onKeyDown={this.closeEditor}/>
      );
    } else {
      return (
        <span onClick={this.clickCell}>{ text }</span>
      );
    }
  }
}
