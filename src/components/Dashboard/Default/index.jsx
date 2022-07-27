import { Container, Row, Col, CardBody, Card, CardHeader } from "reactstrap";
import React, { Fragment, useContext } from "react";
import { Breadcrumbs, H5, P } from "../../../AbstractElements";
import AuthContext from "../../../context/AuthContext";
import PrimarySearchAppBar from "./Navbar";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <Fragment>
      <Row>
        <PrimarySearchAppBar />
      </Row>
    </Fragment>
  );
};

export default Dashboard;
