import { Container, Row, Col, CardBody, Card, CardHeader } from "reactstrap";
import React, { Fragment, useContext } from "react";
import { Breadcrumbs, H5, P } from "../../../AbstractElements";
import AuthContext from "../../../context/AuthContext";
import PrimarySearchAppBar from "./Navbar";
import Header from "../../../Layout/Header";
import Taptop from "../../../Layout/TapTop";
import Sidebar from "../../../Layout/Sidebar";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <Fragment>
      <Row>
        <PrimarySearchAppBar />
      </Row>
      <br />
      {/* <Header /> */}
      {/* <Breadcrumbs mainTitle="Default" parent="Dashboard" title="Dashboard" /> */}
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <H5>Sample Card</H5>
                <span>
                  lorem ipsum dolor sit amet, consectetur adipisicing elit
                </span>
              </CardHeader>
              <CardBody>
                <P>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </P>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <H5>Sample Card</H5>
                <span>
                  lorem ipsum dolor sit amet, consectetur adipisicing elit
                </span>
              </CardHeader>
              <CardBody>
                <P>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </P>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
