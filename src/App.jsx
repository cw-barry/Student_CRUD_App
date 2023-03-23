import "./App.css";
import StudentContextProvider from "./context/StudentContext";
import Student from "./pages/Student";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <StudentContextProvider>
      <Student />
    </StudentContextProvider>
  );
}

export default App;
