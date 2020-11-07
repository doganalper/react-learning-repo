import React, { Component } from 'react';
import './App.css';
import NewTodo from './Components/NewTodo/NewTodo';
import TodosSect from './Components/TodosSection/TodosSect'

class App extends Component {

  state = {
    todos: [
      { id: 0, detail: 'Learn more about React', state: 'Waiting' },
      { id: 1, detail: 'Learn VueJs', state: 'Done' },
      { id: 2, detail: 'Practice guitar', state: 'Waiting' },
    ]
  }

  addTodo = (newTodo) => {
    let newTodos = [...this.state.todos];
    newTodos.push({
      id: this.state.todos.length + 1,
      detail: newTodo,
      state: 'Waiting'
    })
    this.setState({ todos: newTodos })
  }

  makeTodoDone = (todoIndex) => {
    let newTodos = [...this.state.todos];
    let changedTodo = newTodos.find(todo => todo.id === todoIndex);
    changedTodo.state = 'Done';
    this.setState({ todos: newTodos });
    console.log(changedTodo);
    console.log(todoIndex);
  }

  render() {
    return (
      <div className="App">
        <NewTodo addTodo={this.addTodo} />
        <TodosSect todos={this.state.todos} makeTodoDone={this.makeTodoDone}/>
      </div>
    );
  }
}

export default App;