import React from 'react';
import ListTask from './components/ListTask';
import TodoButton from "./components/TodoButton";
import TodoInput from "./components/TodoInput";
import TodoTitle from "./components/TodoTitle";
import './css/app.css';
import '../src/css/NewApp.css';

class App extends React.Component  {
  constructor(props) { 
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
  }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
}

    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      if(newItem.text!==""){
        const items=[...this.state.items,newItem];
        this.setState({
          items:items,
          currentItem:{
            text:'',
            key:''
          }
        })
      }
    }

    handleInput(e){
      this.setState({
        currentItem:{
          text: e.target.value,
          key: Date.now()
        }
      })
    }
    
    deleteItem(key){
      const filteredItem = this.state.items.filter(item =>item.key!==key);
      this.setState({
        items:filteredItem
      })
    }
    
    setUpdate(text,key){
      console.log("Items:",this.state.items);
      const items = this.state.items;
      items.map(item=>{
        if(item.key===key){
          console.log(item.key+" "+key);
          item.text = text;
        }
      })
      this.setState({
        item:items
      })
    }

    
render(){
  return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="Todo-Content">
          <div className="todo-title">
            <TodoTitle title="Todo List"/>
          </div>
          <div className="input-button-align">
            <TodoInput  text_input={this.state.currentItem.text} handle_Change={this.handleInput} />
            <div className="todo-add-button">
              <TodoButton label="Add" handleClick ={this.addItem}  />
            </div>
          </div>
          <div>
            <p>{this.state.items.text}</p>
            <ListTask items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
          </div>
        </div>
      </div>
  );
}
}

export default App;
