import React from "react";

const AddNewStudentForm = (props) => {
  const {
    student,
    setStudent,
    students,
    setStudents,
    editableStudent,
    setEditableStudent,
    editableMode,
    setEditableMode,
  } = props;
  //All Handlers for the buttons
  const onSubmitHandler = (ev) =>
    editableMode ? updateStudentHandler(ev) : addNewStudentHandler(ev);

  //Add a new student after clicking add student button
  function addNewStudentHandler(ev) {
    if (!student) {
      return alert("Please input a valid data");
    }
    ev.preventDefault();
    const newStudent = {
      id: Date.now() + "",
      name: student,
    };
    setStudents([...students, newStudent]);
    setStudent("");
  }

  //update student using update button
  function updateStudentHandler(ev) {
    if (!student) {
      return alert("Please input a valid data");
    }
    ev.preventDefault();
    const updatedStudents = students.map((singleStudent) => {
      if (singleStudent.id === editableStudent.id) {
        singleStudent.name = student;
      }
      return singleStudent;
    });
    setStudents(updatedStudents);
    setEditableMode(false);
    setStudent("");
    setEditableStudent(null);
  }

  return (
    <div>
      <form action="#">
        <input
          type="text"
          onChange={(ev) => setStudent(ev.target.value)}
          value={student}
        />
        <button onClick={(ev) => onSubmitHandler(ev)}>
          {!editableMode ? "Add Student" : "Update Student"}
        </button>
      </form>
    </div>
  );
};

export default AddNewStudentForm;
