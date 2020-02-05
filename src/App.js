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
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
