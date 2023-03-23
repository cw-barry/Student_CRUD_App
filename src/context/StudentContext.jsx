import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StudentContext = createContext();
const baseUrl = "https://cwbarry.pythonanywhere.com/";

const StudentContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [updateId, setUpdateId] = useState(0); // 0 means it is not in update mode

  // GET all students
  const getStudents = async () => {
    try {
      const res = await axios.get(`${baseUrl}student/`);
      console.log(res.data);
      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
      getStudents();
    }
  }, [refresh]);

  // GET one student with ID

  const getOneStudent = async (id) => {
    try {
      const res = await axios.get(`${baseUrl}student/${id}/`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
      getStudents();
    }
  }, [refresh]);

  // ADD a student

  const addStudent = async (data) => {
    try {
      const res = await axios({
        method: "post",
        url: `${baseUrl}student/`,
        data: data,
      });
      console.log(res.data);
      setRefresh(true);
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE a Student

  const updateStudent = async (data, id) => {
    try {
      const res = await axios({
        method: "put",
        url: `${baseUrl}student/${id}/`,
        data: data,
      });
      console.log(res.data);
      setRefresh(true);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE a Student

  const deleteStudent = async (id) => {
    try {
      const res = await axios({
        method: "delete",
        url: `${baseUrl}student/${id}/`,
      });
      console.log(res.data);
      setRefresh(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        updateId,
        setUpdateId,
        getOneStudent,
        updateStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
