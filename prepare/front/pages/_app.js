import React from "react";
import propTypes from "prop-types";
import Head from "next/head";
import { Provider } from "react-redux";
import "antd/dist/antd.js";
import "antd/dist/reset.css";

import wrapper from "../store/configureStore";

const NodeBird = ({ Component, ...rest }) => {
  // 모든 페이지의 공통페이지
  // index.js의 return값이 component로 들어간다 index의 부모인샘
  // console.log("여긴먼데", Component);
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta charSet="utf-8" />
          <title>NodeBird</title>
        </Head>
        {/* <div>공통메뉴</div> */}
        <Component {...props} />
      </Provider>
    </>
  );
};

NodeBird.propTypes = {
  Component: propTypes.elementType.isRequired,
};
// export default wrapper.withRedux(NodeBird);
export default NodeBird;
