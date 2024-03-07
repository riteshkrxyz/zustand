import React from "react";
import CourseForm from "./components/CourseForm";
import useCourseStore from "./store/courseStore";
import { useNameStore } from "./store/nameStore.ts";

function App() {
  // const { courses, removeCourse, toggleCourseStatus } = useCourseStore();
  const { firstname, lastname, updateFirstName, updateLastName } = useNameStore();
  return (
    <>
      <div>
        <p>FirstName : {firstname} , LastName : {lastname}</p>
        <div>
          <label htmlFor="">FirstName</label>
          <input type="text" name="" id="" onChange={(e) => updateFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Lastname</label>
          <input type="text" name="" id="" onChange={(e) => updateLastName(e.target.value)} />
        </div>
      </div>
    </>

  );
}

export default App;
