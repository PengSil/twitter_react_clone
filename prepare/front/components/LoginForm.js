import React, { useCallback, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import PropTypes from "prop-types";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";

import useinput from "../hooks/useinput";
import { loginRequestAction } from "../reducers/user";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;
/* 
  <div style={{ marginTop: 10 }}> inlineStyling 방식
   스타일을 이렇게 집어 넣을수도 있지만(스타일 주려면 객체를 넣을수 바게 없음) 
  이런식으로 스타일 안에 객체를 넣으면 객체가 새로 생성되서 저 div 안의 부분이 리랜더링되고 성능 저하를 야기한다 그래서 styled 컴포넌트를 사용해서 ButtonWrapper를 div태그로 만들어주고 사용 styled.div 하면 저 태그가 div가 됨
  
  styled 컴포넌트로 만들거나 싫으면 useMemo를 사용해서 처리한다
  여기서는 styled를 사용해서 useMemo로 안해도 되지만 예시를 남기기 위해 사용해놨음 30번째줄
  <ButtonWrapper style={style}>
*/

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useinput("");
  const [password, onChangePassword] = useinput("");

  const style = useMemo(() => ({ marginTop: 10 }), []);

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  /*hooks 에서 리랜더링이 됬을때 함수 안의 부분이 다시 실행되는건 맞는데
    return부분은 바뀌는 부분만 다시 그린다 전체를 다시 그리는건 아님
  */

  // 컴포넌트에 넣는 함수는 useCallback으로 감싸준다
  // onFinish  Form에 submit이 일어 났을때
  // Form의 onFinish에는 e.preventDefault가 들어있으므로 안써줘도 된다
  const onSubmitForm = useCallback(() => {
    console.log("로그인시 넘어가는 값", email, password);
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
      </div>
      <ButtonWrapper style={style}>
        <Button type="primary" htmlType="submit" loading={logInLoading}>
          로그인
        </Button>
        <Link href="/signup" legacyBehavior>
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

// LoginForm.propTypes = {
//   // 여기 있는 node는 react 에 있는 node return ( 여기 있는게 모두 node 이다 )
//   setIsLoggedIn: PropTypes.func.isRequired,
// };
export default LoginForm;
