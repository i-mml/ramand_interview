import { Col, Modal, Form, Input, Button } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fakeData } from "../fakeData";
import { ChnagedList } from "../../redux/actions";
import s from "./style.module.scss";

const Card = (props) => {
  const { id, firstName, age } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handleEditFinish = (values) => {
    const objIndex = fakeData.findIndex((obj) => obj.id == values.id);
    fakeData[objIndex].firstName = values.firstName;
    fakeData[objIndex].age = values.age;
    dispatch(ChnagedList());
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [form] = useForm();

  return (
    <>
      <Col
        xs={22}
        lg={11}
        className={s.card}
        onClick={() => setIsModalVisible(true)}
      >
        name : {firstName} | age : {age}
      </Col>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true }}
      >
        <Form
          form={form}
          name="home-table"
          onFinish={handleEditFinish}
          initialValues={{ id: id, firstName: firstName, age: age }}
          labelCol={{ span: 5 }}
          style={{ textAlign: "center" }}
        >
          <Form.Item name="id" label="Id:">
            <Input disabled />
          </Form.Item>

          <Form.Item
            name="firstName"
            label="FirstName:"
            rules={[
              {
                required: true,
                message: "you must enter firstName",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                required: true,
                message: "age must be exist",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Edit
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default Card;
