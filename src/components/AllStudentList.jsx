import React from "react";
const AllStudentList = (props) => {
  const {
    setStudent,
    students,
    setStudents,
    setEditableStudent,
    setEditableMode,
  } = props;
  //Edit ========>
  const editStudentHandler = (id) => {
    const toBeEditated = students.find((item) => {
      return item.id === id;
    });
    setEditableMode(true);
    setEditableStudent(toBeEditated);
    setStudent(toBeEditated.name);
  };

  //Delete ======>
  const deleteStudentHandler = (id) => {
    const filteredStudents = students.filter((student) => student.id !== id);
    setStudents(filteredStudents);
  };

  //Present Handler ==========>
  const makePresentHandler = (id) => {
    const newStudents = students.map((student) => {
      if (student.id === id) {
        if (student.isPresent === undefined) {
          student.isPresent = true;
        } else if (student.isPresent === true) {
          alert("This student is already in present list!");
        } else if (student.isPresent === false) {
          alert("Please use the accidentally added button to make present");
        }
      }
      return student;
    });
    setStudents(newStudents);
  };

  //Absent Handler ======>
  const makeAbsentHandler = (id) => {
    const newStudents = students.map((student) => {
      if (student.id === id) {
        if (student.isPresent === undefined) {
          student.isPresent = false;
        } else if (student.isPresent === false) {
          alert("This student is already in absent list!");
        } else if (student.isPresent === true) {
          alert("Please use the accidentally added button to make absent");
        }
      }
      return student;
    });
    setStudents(newStudents);
  };
  return (
    <div className="list all-student-list">
      <h1>All Students</h1>
      <ul>
        {students?.map((student) => {
          return (
            <li key={student.id}>
              <p>{student.name}</p>
              <div className="actions-buttons">
                <button onClick={(ev) => editStudentHandler(student.id)}>
                  Edit
                </button>
                <button onClick={() => deleteStudentHandler(student.id)}>
                  Delete
                </button>
                <button onClick={() => makePresentHandler(student.id)}>
                  Make Present
                </button>
                <button onClick={() => makeAbsentHandler(student.id)}>
                  Make Absent
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllStudentList;
