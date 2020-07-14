import React from 'react'
import './LoginForm.less'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Item = Form.Item;

const NormalLoginForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Item>
      <Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Item>
      <Item>
        <Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Item>

      <Item>
        <Button type="primary" htmlType="submit" className="login-form-button w-100">
          登录
        </Button>
        Or <a href="">register now!</a>
      </Item>
    </Form>
  );
};

export default NormalLoginForm