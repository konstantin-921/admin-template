import React from "react"
import { Container, Row, Col } from "shards-react"

import MainNavbar from "../components/layout/MainNavbar/MainNavbar"
import MainSidebar from "../components/layout/MainSidebar/MainSidebar"
import MainFooter from "../components/layout/MainFooter"

const props = {
  contained: false,
  copyright: "Copyright © 2018 DesignRevision",
  menuItems: [
    {
      title: "Home",
      to: "#"
    },
    {
      title: "Services",
      to: "#"
    },
    {
      title: "About",
      to: "#"
    },
    {
      title: "Products",
      to: "#"
    },
    {
      title: "Blog",
      to: "#"
    }
  ]
}



const DefaultLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      <MainSidebar />
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {!noNavbar && <MainNavbar />}
        {children}
        {!noFooter && <MainFooter {...props} />}
      </Col>
    </Row>
  </Container>
);

export default DefaultLayout;
