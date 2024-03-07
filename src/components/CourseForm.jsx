import { useState } from "react";
import useCourseStore from "../store/courseStore";

const CourseForm = () => {
  const { courses, addCourse, removeCourse, toggleCourseStatus } =
    useCourseStore();
  const [title, setTitle] = useState("");
  const handleCourseSubmit = () => {
    if (!title) return alert("Please enter a title");
    console.log({
      id: Math.ceil(Math.random() * 100000),
      title: title,
      completed: false,
    });
    addCourse({
      id: Math.ceil(Math.random() * 100000),
      title: title,
      completed: false,
    });
    console.log(courses);
  };
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          handleCourseSubmit();
        }}
      >
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;
