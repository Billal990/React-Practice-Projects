import React from "react";

const AbsentStudentList = (props) => {
  const { students, setStudents } = props;
  //Accidentally Added Handler ========>
  const accidentallyAddedHandler = (id) => {
    const newStudents = students.map((student) => {
      if (student.id === id) {
        student.isPresent = !student.isPresent; //Altering boolean
      }
      return student;
    });
    setStudents(newStudents);
  };
  return (
    <div className="list absent-student-list">
      <h1> Absent Students</h1>
      <ul>
        {students
          ?.filter((student) => student.isPresent === false)
          .map((absent) => (
            <li key={absent.id}>
              {absent.name}
              <button onClick={() => accidentallyAddedHandler(absent.id)}>
                Accidentally Added
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AbsentStudentList;
