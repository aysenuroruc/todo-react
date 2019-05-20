import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
		this.props.loginSuccess();
      }
    });
  }
  
  constructor(props) {
	super(props);
    this.state={username:"user", password: "password"};
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
	<div id="components-form-demo-normal-login">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
			initialValue: this.state.username,
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
			initialValue: this.state.password,
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="/forgot">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          
        </FormItem>
      </Form>
	  </div>
    );
  }
}


const LoginForm = Form.create()(NormalLoginForm);
export default LoginForm;