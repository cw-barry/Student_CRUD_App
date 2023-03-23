import React, { useContext } from "react";

import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Trash, Pencil } from "react-bootstrap-icons";
import { StudentContext } from "../context/StudentContext";

const StudentList = () => {
  const { students, deleteStudent, setUpdateId } = useContext(StudentContext);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) deleteStudent(id);
  };
  return (
    <ListGroup>
      <h3>Student List</h3>
      {students.map((student) => (
        <ListGroupItem
          key={student.id}
          className="d-flex justify-content-between"
        >
          {`${student.number} - ${student.first_name} ${student.last_name}`}
          <div>
            <Trash className="mx-2" onClick={() => handleDelete(student.id)} />{" "}
            <Pencil className="mx-2" onClick={() => setUpdateId(student.id)} />
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default StudentList;
