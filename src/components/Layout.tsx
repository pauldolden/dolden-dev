import * as React from "react";
import styled from "styled-components";
import Head from "./Head";
// Styles
import GlobalStyles from "../styles/globals";
import Header from "./Header";
import { Footer } from "./Footer";

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;

  main {
    padding: 3rem 15%;
    padding-bottom: 6rem;
    flex: 1;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <GlobalStyles />
      <Head />
      <PageWrapper>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Layout;
