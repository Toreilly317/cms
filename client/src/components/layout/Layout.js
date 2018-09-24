import React from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 7vh 86vh 7vh;
  align-content: space-between;
`;

export default props => {
  return (
    <Layout>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </Layout>
  );
};
