import React, { useState } from 'react';
import { useResume } from '../ResumeContext';

const CoursesForm = () => {
  const { resumeState, updateCourses } = useResume();
  const [courses, setCourses] = useState(resumeState.courses);

  const addCourse = () => {
    setCourses([...courses, { name: '', institution: '', year: '' }]);
  };

  const updateCourse = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index][field] = value;
    setCourses(newCourses);
    updateCourses(newCourses);
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-semibold mb-4">Courses</h2>
      {courses.map((course, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            placeholder="Course Name"
            value={course.name}
            onChange={(e) => updateCourse(index, 'name', e.target.value)}
            className="block w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Institution"
            value={course.institution}
            onChange={(e) => updateCourse(index, 'institution', e.target.value)}
            className="block w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Year"
            value={course.year}
            onChange={(e) => updateCourse(index, 'year', e.target.value)}
            className="block w-full mb-2 p-2 border rounded"
          />
        </div>
      ))}
      <button onClick={addCourse} className="bg-blue-500 text-white p-2 rounded">Add Course</button>
    </div>
  );
};

export default CoursesForm;
