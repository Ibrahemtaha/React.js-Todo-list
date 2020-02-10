import React, { Component } from "react";
//import "./App.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { render } from "@testing-library/react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// one
class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "running" }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    console.log("handle change");
  };
  handleSubmit = e => {
    console.log("Submit");
  };
  clearList = e => {
    console.log("clearList");
  };
  handleDelete = id => {
    console.log(`handle delete ${id}`);
  };
  handleEdit = id => {
    console.log(`handle edit ${id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.editItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
