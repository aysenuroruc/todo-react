import React from 'react';
import { Input, List, Icon, DatePicker, Button, Row, Col } from "antd";

import "antd/dist/antd.css";

export default class Todo extends React.Component {
  // --- snip ---
  
  constructor(args) {
	  super(args);
	  this.state={todolists:[], selected: -1};
	  this.fetchAll();
  }
  fetchAll(){
		fetch('http://localhost:8080/todolists', {
		  method: 'GET',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Basic dXNlcjpwYXNzd29yZA=='
		  }
		})
		.then(function(response) {
			return response.json();
		  }).then((body)=>{
			console.log(body);
			//body.payload.push({});
			this.setState({todolists: body.payload, selected: this.state.selected});
			console.info(this.state);
		});
	}
  saveTodoList = e => {
	  console.log("Saving");
	  
	  fetch('http://localhost:8080/todolists/saveall', {
		  method: 'POST',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Basic dXNlcjpwYXNzd29yZA=='
		  },
		  body: JSON.stringify(this.state.todolists)
		}).then((res)=>{
			console.log(res);
			this.fetchAll();
			
		});
  }
  removeTodoList = ( index, id) => {
		//console.log(e); 
		console.log(index); 
	  fetch('http://localhost:8080/todolists/'+ id, {
		  method: 'DELETE',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Basic dXNlcjpwYXNzd29yZA=='
			}
				}).then((res)=>{
			console.log(res);
			let todoLists=this.state.todolists.splice(index,1)
			this.setState({todolists: todoLists, selected: this.state.selected});
		});
	}
	removeTodo = (index) => {
		console.log(index);
		let todolist = this.state.todolists[this.state.selected];
		//console.log(todolist)
		todolist.todos.splice(index, 1)
		//console.log(todolist)
		console.log(this.state.todolists[this.state.selected])
		let selected=this.state.selected;
		this.setState({todolists: this.state.todolists, selected: selected});
		this.saveTodoList();

	}
	
  selectTodoList = (id, index) => {
	  
	  fetch('http://localhost:8080/todolists/' + id, {
		  method: 'GET',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Basic dXNlcjpwYXNzd29yZA=='
		  }
		})
		.then(function(response) {
			return response.json();
		  }).then((body)=>{
			console.log(body);
			console.log("index");
			console.log(index);
			this.setState({todolists:this.state.todolists, selected: index});
		});
  }
  createTodoList = e => {
	  let todolists = this.state.todolists;
	  todolists.push({todos:[]});
	  let selected=this.state.todolists.length-1;
	  this.setState({todolists: todolists, selected: selected});
  }
  
  handlePressEnter = e => {
    // Create a todo object containing its index, content,
    // as well as an empty date
    const todo = {
      index: this.state.todolists[this.state.selected].length,
      content: e.target.value,
      date: null,
      dateString: ""
    };

    // Add the new todo to our array
	console.info(this.state.todolists[this.state.selected]);
    const newTodos = this.state.todolists[this.state.selected].todos.concat(todo);

	let todolists = this.state.todolists;
	todolists[this.state.selected].todos = newTodos;
    this.setState({
      todolists: this.state.todolists,
	  selected: this.state.selected
    });

    // Clear input
    e.target.value = "";
  };

  setDate = (index, date, dateString) => {
    // Set the date of the given todo
    let newTodos = [...this.state.todolists[this.state.selected].todos];
    newTodos[index].date = date;
    newTodos[index].dateString = dateString;

    // Initialize the state
	let todolists = this.state.todolists;
	todolists[this.state.selected].todos = newTodos;
    this.setState({
      todolists: this.state.todolists,
	  selecetd: this.state.selected
    });
  };
  onTitleChange=e=>{
	  let title=e.target.value;
	  this.state.todolists[this.state.selected].title = title;
	  this.setState({todolists: this.state.todolists,
		selected: this.state.selected
	  });
  }

  render() {
    return (
      <div className="todoContainer">
        <h1>TODO App</h1>

		<Row >
		  <Col span={4}>
		    <List
			  locale={{ emptyText: "No todo list" }}
			  dataSource={this.state.todolists}
			  renderItem={(item, index) => (
				<div> <a onClick={()=>this.selectTodoList(item.id, index)} id={item.id} index={index}>{item.title}</a> 
				 <Icon
            type="close-circle"
            theme="filled"
            onClick={()=> this.removeTodoList(index ,item.id)}
          />
				<br></br></div>
			  )}
			/>
		  </Col>
		  <Col span={16}>
			  {this.state.selected>-1 ?
		
				<div>
					<Input
					  placeholder="Title"
					  onChange={this.onTitleChange}
					  defaultValue={this.state.todolists[this.state.selected].title}
					/>
					<Input
					  placeholder="What needs to be done?"
					  onPressEnter={this.handlePressEnter}
					/>
					<List
					  locale={{ emptyText: "No todo items" }}
					  dataSource={this.state.todolists[this.state.selected].todos}
					  renderItem={(item, index) => (
						<TodoItem
						  todo={item}
						  removeTodo={this.removeTodo}
							setDate={this.setDate}
							index = {index}
						/>
					  )}
					/>
					<Button type="primary" htmlType="submit" className="login-form-button" onClick={this.saveTodoList}>
					Save
				  </Button>
				
			</div>
			  : "Select a todo list or create new one"}
			  <div>
					<a onClick={this.createTodoList} >Create new todo list</a>
				</div>
		  </Col>
		</Row>
        
		 
      </div>
    );
  }
}

class TodoItem extends React.Component {
  remove = () => {
    // Remove this TodoItem
    this.props.removeTodo(this.props.index);
  };

  handleDateChange = (date, dateString) => {
    // Update the date when changed
    this.props.setDate(this.props.todo.index, date, dateString);
  }

  render() {
    return (
      <List.Item
        actions={[
          <DatePicker
            format="MM/DD/YYYY"
            onChange={this.handleDateChange}
            value={this.props.todo.date}
          />,
          <Icon
            type="close-circle"
            theme="filled"
            onClick={this.remove}
          />
        ]}
      >
        {this.props.todo.content}
      </List.Item>
    );
  }
}