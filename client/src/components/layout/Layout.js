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

const ContentWrapper = styled.div`
  display: grid;
  padding: 2em;
`;

export default props => {
  return (
    <Layout>
      <Header />
      <ContentWrapper>
        <Content>{props.children}</Content>
      </ContentWrapper>
      <Footer />
    </Layout>
  );
};
