import React from "react";
import { Row, Col, Divider, Image, Menu, Dropdown } from "antd";
import s from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setLogOut } from "../../redux/actions";

const Header = () => {
  const Result = useSelector((state) => state.Result);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(setLogOut());
  };

  return (
    <Row justify="space-between" className={s.header}>
      <Col span={15} className={s.left_header}>
        <div>Result : {Result}</div>
      </Col>
      <Col span={8} className={s.right_header}>
        <Image
          src="/images/profile.png"
          width={45}
          height={45}
          preview={false}
          className={s.user_image}
        />
        <Dropdown
          overlay={
            <div className={s.logout} onClick={handleLogOut}>
              log out
            </div>
          }
        >
          <span className={s.username}>ramand</span>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default Header;
