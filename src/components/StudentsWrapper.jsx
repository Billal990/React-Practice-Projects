import React from "react";
import { useState } from "react";
import AddNewStudentForm from "./AddNewStudentForm";
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";
import AbsentStudentList from "./AbsentStudentList";
const StudentsWrapper = () => {
  const [student, setStudent] = useState("");
  const [students, setStudents] = useState([]);
  const [editableStudent, setEditableStudent] = useState(null);
  const [editableMode, setEditableMode] = useState(false);
  return (
    <div className="app-container">
      <AddNewStudentForm
        student={student}
        setStudent={setStudent}
        students={students}
        setStudents={setStudents}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
        editableMode={editableMode}
        setEditableMode={setEditableMode}
      />
      <div className="student-section">
        <AllStudentList
          setStudent={setStudent}
          students={students}
          setStudents={setStudents}
          setEditableStudent={setEditableStudent}
          setEditableMode={setEditableMode}
        />
        <PresentStudentList students={students} setStudents={setStudents} />
        <AbsentStudentList students={students} setStudents={setStudents} />
      </div>
    </div>
  );
};

export default StudentsWrapper;
