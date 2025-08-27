import React from 'react';

const courses = [
  { id: 1, color: '#7dff32ff', name: 'A1.1 (intensif)', duration: '3-4 semaines (45h au total)', type: "à partir d'octobre 2025"},
  { id: 2, color: '#7dff32ff', name: 'A1.2 (intensif)', duration: '3-4 semaines (45h au total)', type: "à partir d'octobre 2025"},
  { id: 3, color: '#68dd68ff', name: 'A2.1 (intensif)', duration: '3-4 semaines (45h au total)', type: "à partir d'octobre 2025"},
  { id: 4, color: '#68dd68ff', name: 'A2.2 (intensif)', duration: '3-4 semaines (45h au total)', type: "à partir d'octobre 2025"},

  { id: 5, color: '#ffff32ff', name: 'B1.1 (intensif)', duration: '3 semaines (45h au total)', type: "à partir d'octobre 2025"},
  { id: 6, color: '#ffff32ff', name: 'B1.2 (intensif)', duration: '3 semaines (45h au total)', type: "à partir d'octobre 2025"},
  { id: 7, color: '#f2bf27ff', name: 'B2.1 (intensif)', duration: '3 semaines (45h au total)', type: "à partir d'octobre 2025"},
  { id: 8, color: '#f2bf27ff', name: 'B2.2 (intensif)', duration: '3 semaines (45h au total)', type: "à partir d'octobre 2025"}
];

function CoursesList() {
  return (
    <section
      id="courses"
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '1rem 2rem',
      }}
    >
      <h2 style={{ textAlign: 'center', color: 'black', marginBottom: '1rem' }}>
        Les Cours d'Allemand
      </h2>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff'
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
                backgroundColor: course.color,
                fontSize: '1.1rem',
                fontWeight: '600',
            }}
            >
            <span style={{ color: '#666', fontWeight: '8000' }}>
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
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', color: '#666', textAlign: 'justify' }}>
          Toutes les mises à jour concernant le début et les horaires des cours seront publiées sur le site web. Les participants seront informés par e-mail ou par téléphone après avoir réglé les frais d'inscription. Les cours se déroulent à l'aide de documents PDF via Microsoft Teams.
À la demande du groupe, le rythme des cours peut être ralenti.
        </p>
      </div>
    </section>
  );
}

export default CoursesList;