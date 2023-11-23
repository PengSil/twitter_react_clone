import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled, { createGlobalStyle } from "styled-components";

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0! important;
  }

  .ant-col:first-child {
    padding-left: 0! important;
  }

  .ant-col:last-child {
    padding-right: 0! important;
  }
`;
{
  /* 
   <Input.Search enterButton style={{ verticalAlign: "middle" }} />; 
   같은 컴포넌트를 styled로 만들땐 이렇게 만든다 inlineStyling은 리랜더링을 할떄 최적화가 안된다
*/
}
const AppLayout = ({ children }) => {
  // isLoggedIn이 바뀌면 알아서 AppLayout이 리랜더링 된다
  const me = useSelector((state) => state.user.me);

  //console.log("리듀서", isLoggedIn);
  /*
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    redux로 빼서 쓰기
  */

  return (
    <div>
      <Global />
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/" legacyBehavior>
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile" legacyBehavior>
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup" legacyBehavior>
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {/* gutter 컬럼사이의 간격 
      Row Col 100%를 24등분해서 반응형으로 웹을 동작하게 함*/}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://naver.com" target="_blank" rel="noreferrer noopener">
            {/* blank로 새창에서 열때는 보안 위협이 있어서 rel로 noreferrer noopener해줘야 한다 */}
            네이버
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  // 여기 있는 node는 react 에 있는 node return ( 여기 있는게 모두 node 이다 )
  children: PropTypes.node.isRequired,
};

export default AppLayout;
