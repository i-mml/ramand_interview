import { Form, Input, Button, Col, Divider, Row, notification } from "antd";
import Password from "antd/lib/input/Password";
import React from "react";
import s from "./style.module.scss";
import { setLogIn } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const userInformation = {
    username: "ramand",
    password: "1234",
  };

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (
      values.username == userInformation.username &&
      values.password == userInformation.password
    ) {
      dispatch(setLogIn());
      notification.success({
        message: "success",
        description: "You loged in successfuly, welcome!",
      });
    } else {
      notification.error({
        message: "Error",
        description: "username or password is incorrect , try again",
      });
    }
  };

  return (
    <Row justify="center">
      <Col xs={20} lg={8} className={s.card_container}>
        <h2>Welcome to ramand</h2>
        <Form form={form} name="login" onFinish={onFinish}>
          <Form.Item
            name="username"
            label="username:"
            rules={[
              {
                required: true,
                message: "you must enter your username",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "password must be exist",
              },
              { min: 4, max: 4, message: "password must be 4 number" },
            ]}
          >
            <Input type="password" maxLength="4" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
