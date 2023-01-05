import React from "react";

const PresentStudentList = (props) => {
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
    <div className="list present-student-list">
      <h1>Present Students</h1>
      <ul>
        {students?.filter(student=>student.isPresent === true).map(present=>
              (<li key={present.id}>
                {present.name}
                <button onClick={()=>accidentallyAddedHandler(present.id)}>
                  Accidentally Added
                </button>
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default PresentStudentList;
