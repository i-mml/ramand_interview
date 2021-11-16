import {
  Row,
  Form,
  Input,
  Button,
  Spin,
  Modal,
  Table,
  Pagination,
  Col,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import { fakeData } from "../../Components/fakeData";
import s from "./style.module.scss";
import { ResultLength } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Home = () => {
  const pageSize = 10;
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState(fakeData);
  const [page, setPage] = useState(1);

  const [form] = useForm();

  const dispatch = useDispatch();
  const ChangedList = useSelector((state) => state.ChangeList);

  useEffect(() => {
    setResultData(fakeData);
  }, [ChangedList]);

  useEffect(() => {
    dispatch(ResultLength(resultData.length));
  }, [resultData]);

  const onFinish = (values) => {
    setLoading(true);
    if ((values.search === "") & (values.search === " ")) {
      setResultData(fakeData);
    } else {
      let searchResponse = fakeData.filter(function (item) {
        return (
          item.firstName.includes(values.search) || item.age == values.search
        );
      });
      setPage(1);
      setResultData(searchResponse);
    }
    setLoading(false);
  };

  return (
<Layout>
    <div className={s.home}>
      <Form form={form} onFinish={onFinish}>
        <Row justify="center">
          <Form.Item name="search">
            <Input placeholder="search something..." />
          </Form.Item>
          <Button htmlType="submit">Search</Button>
        </Row>
      </Form>
      {loading ? (
        <Spin />
      ) : (
        <Row justify="space-around">
          {resultData.length !== 0 ? (
            resultData
              ?.slice(page * pageSize - 10, page * pageSize)
              .map(({ id, firstName, age }) => (
                <Card key={id} id={id} firstName={firstName} age={age} />
              ))
          ) : (
            <h2>there is no result</h2>
          )}
          <Col span={24}>
            <Pagination
              defaultCurrent={1}
              onChange={(page) => setPage(page)}
              pageSize={pageSize}
              total={resultData.length}
              hideOnSinglePage
            />
          </Col>
        </Row>
      )}
    </div>
</Layout>
  );
};

export default Home;
