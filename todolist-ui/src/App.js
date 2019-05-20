import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import Todo from './components/Todo'
import { Layout, Row, Col } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { pageStatus: "login" }
  }
  
  registerForm = (e) => {
	  
	  this.setState({pageStatus: "register"});
  }
  loginSuccess = (e) => {
	  
	  this.setState({pageStatus: "todo"});
  }
  
  render() {
	  if(this.state.pageStatus == "login") {
    return (
      <div className="App">
	  
	    <Layout>
          <Header>Login Form</Header>
          <Content style={{paddingTop:100, paddingBottom:110}}>
			<Row type="flex" justify="center">
			  <Col value={500}>
			    <LoginForm loginSuccess={this.loginSuccess}/> 
			  </Col>
		    </Row>
			Or <a href="#register" onClick={this.registerForm}>register now!</a>
		  </Content>
          <Footer ><h3>Your are @TodoList</h3></Footer>
	    </Layout>
		 </div>
		 )
	  }
	  else if (this.state.pageStatus == "register") {
		  return (
		  <div className="App">
	  
	    <Layout>
          <Header>Login Form</Header>
          <Content style={{paddingTop:100, paddingBottom:110}}>
			<Row type="flex" justify="center">
			  <Col value={500}>
			   <RegistrationForm/> 
			  </Col>
		    </Row>
			Or <a href="#register" onClick={this.registerForm}>register now!</a>
		  </Content>
          <Footer ><h3>Your are @TodoList</h3></Footer>
	    </Layout>
		 </div>
		 )
	  }
     else if (this.state.pageStatus == "todo") {
		  return (
		  <div className="App">
	  
	    <Layout>
          <Header>Login Form</Header>
          <Content style={{paddingTop:100, paddingBottom:110}}>
			<Row  justify="start">
			  <Col span={24}>
			   <Todo />
			  </Col>
		    </Row>
		  </Content>
          <Footer ><h3>Your are @TodoList</h3></Footer>
	    </Layout>
		 </div>
		 )
	  }
  }
}

export default App;
