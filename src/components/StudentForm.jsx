import React, { useContext, useEffect, useState } from "react";

import { Card, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { StudentContext } from "../context/StudentContext";

const emptyFormData = {
  first_name: "",
  last_name: "",
  number: "",
  path: "",
};

const StudentForm = () => {
  const { addStudent, updateId, setUpdateId, getOneStudent, updateStudent } =
    useContext(StudentContext);
  const [formData, setFormData] = useState(emptyFormData);

  const getUpdateData = async () => {
    const data = await getOneStudent(updateId);
    setFormData(data);
  };

  useEffect(() => {
    if (updateId) {
      getUpdateData();
    }
  }, [updateId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateId) {
      setUpdateId(0);
      updateStudent(formData, updateId);
    } else {
      addStudent(formData);
    }
    setFormData(emptyFormData);
  };

  return (
    <Card>
      <Form className="p-2 my-2" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="first_name">First Name</Label>
          <Input
            type="text"
            name="first_name"
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="last_name">Last Name</Label>
          <Input
            type="text"
            name="last_name"
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="number">Number</Label>
          <Input
            type="number"
            name="number"
            id="number"
            value={formData.number}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="path">Path</Label>
          <Input
            type="text"
            name="path"
            id="path"
            value={formData.path}
            onChange={handleChange}
          />
        </FormGroup>

        <Button className="my-2" color="secondary" style={{ width: "50%" }}>
          {updateId ? "Update" : "Add"}
        </Button>
      </Form>
    </Card>
  );
};

export default StudentForm;
