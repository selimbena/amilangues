import React from 'react';

const courses = [
  { id: 1, name: 'Deutsch A1', duration: '3 months', type: 'group / private'},
  { id: 2, name: 'Deutsch A2', duration: '3 months', type: 'group / private'},
  { id: 3, name: 'Deutsch B1', duration: '5 months', type: 'group' },
  { id: 3, name: 'Deutsch B2', duration: '5 months', type: 'group' }
];

function CoursesList() {
  return (
    <section
      id="courses"
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '1rem 2rem',
      }}
    >
      <h2 style={{ textAlign: 'center', color: 'black', marginBottom: '1rem' }}>
        Available Courses
      </h2>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
        }}
      >
        {courses.map(course => (
            <li
            key={course.id}
            style={{
                display: 'grid',
                gridTemplateColumns: '2fr 2fr 2fr',
                gap: '2rem',
                padding: '1rem 1.5rem',
                borderBottom: '1px solid #eee',
                fontSize: '1.1rem',
                fontWeight: '600',
            }}
            >
            <span style={{ color: '#666', fontWeight: '400' }}>
                {course.name}
            </span>
            <span style={{ color: '#666', fontWeight: '400' }}>
                {course.duration}
            </span>
            <span style={{ color: '#666', fontWeight: '400' }}>
                {course.type}
            </span>
            </li>
        ))}
      </ul>
    </section>
  );
}

export default CoursesList;