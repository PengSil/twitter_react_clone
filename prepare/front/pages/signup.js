import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { END } from "redux-saga";

import wrapper from "../store/configureStore";
import AppLayout from "../components/AppLayout";
import useinput from "../hooks/useinput";
import { SIGN_UP_REQUEST, LOAD_MY_INFO_REQUEST } from "../reducers/user";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, me } = useSelector((state) => state.user);

  // Router.push 하면 뒤로가기 했을때 뒤로 가지는데 replace를 쓰면 기록자체가 사라져 뒤로가기가안됨
  useEffect(() => {
    if (me && me.id) {
      Router.replace("/");
    }
  }, [me && me.id]);

  useEffect(() => {
    if (signUpDone) {
      Router.replace("/");
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const [email, onChangeEmail] = useinput("");
  const [password, onChangePassword] = useinput("");
  const [nickname, onChangeNickname] = useinput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [PasswordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onsubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log("전송중", email, nickname, password);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [email, password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onsubmit}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input name="user-email" type="email" value={email} required onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
          {PasswordError && <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            동의 합니다.
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의 하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  // 서버쪽에서 실행하면 context.req라는게 존재한다
  const cookie = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  // 서버일때랑 쿠키가 있을때 이렇게 안하면 쿠키가 공유되는일이 생긴다 서버에서 실행하는거라
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  // request가 success가 될때까지 기다리는 코드
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Signup;
