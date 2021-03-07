import React from 'react';
import TodoButton from "./components/TodoButton";
import TodoInput from "./components/TodoInput";
import TodoTitle from "./components/TodoTitle";
import './css/app.css';
import ListTask from './components/ListTask';

class App extends React.Component  {
  constructor() { 
    super();
    this.state = {
      UserInput:"",
      list:[]
  }
}

render(){
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="Todo-Content">
        <div className="todo-title">
          <TodoTitle title="Todo List"/>
        </div>
        <div className="input-button-align">
          <TodoInput/>
          <div className="todo-add-button">
            <TodoButton label="Add"/>
          </div>
        </div>
        <div className="list-item">
          <ListTask tasks="Study hooks and react well with all the features"/>
        </div>
      </div>
    </div>
  );
}
}

export default App;
