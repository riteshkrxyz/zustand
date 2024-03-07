import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware';

const courseStore = (set) => ({
    // initial state of parameter that we are going to change
    courses: [],

    // actions

    addCourse: (course) => {
        set((state) => ({
            courses: [...state.courses, course],
        }))
    },
    removeCourse: (courseId) => {
        set((state) => ({
            courses: state.courses.filter((c) => c.id !== courseId)
        }))
    },
    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.courses.map((c) => c.id === courseId ? { ...c, completed: !c.completed } : c)
        }))
    }
})

const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: 'courses',
        })
    )
)

export default useCourseStore;


// course = {
//     id: 124,
//     title: "Express js",
//     completed: false,
// }