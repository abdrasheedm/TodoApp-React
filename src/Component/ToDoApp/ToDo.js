import React, { Component } from 'react'
import "./ToDoApp.css"

export default class ToDo extends Component {

  state = {
    input : "",
    items : []
  }

  handleChange = (event) => {
    this.setState({
      input : event.target.value
    })
  }

  storeItems = (event) => {
    event.preventDefault()
    const  {input } = this.state


    this.setState({
      items : [...this.state.items, input ],
      input : ""
    })

  }

  deleteItem = key => {
    
    const allItems = this.state.items
    
    allItems.splice(key, 1)

    this.setState({
      items : allItems
    })
  }
  // componentDidUpdate() {
  //   console.log(this.state)
  // }
  render() {

      const { input, items} = this.state
      // console.log(items)

    return (
      <div className="todo-containter">
        <form className="input-section" onSubmit={this.storeItems}>
        <h1>ToDo App</h1>
          <input type="text" value={input} onChange={this.handleChange} placeholder="Enter items..."/>
          </form>

          <ul>
            {items.map((data, index) => (
              <li key={index}>
                {data} <i className="fa-solid fa-trash-can" onClick={() => this.deleteItem(index)}></i>
              </li>
            ))}
          </ul>
      
      </div>
    )
  }
}
