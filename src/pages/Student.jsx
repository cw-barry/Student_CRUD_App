import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import { StudentContext } from "../context/StudentContext";

const Student = () => {
  return (
    <Container fluid>
      <Row className="justify-content-between">
        <Col xs={4}>
          <StudentForm />
        </Col>
        <Col xs={8}>
          <StudentList />
        </Col>
      </Row>
    </Container>
  );
};

export default Student;
