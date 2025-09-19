import '../styles/CoursesList.css';
import { useTranslation } from 'react-i18next';

function CoursesList() {

  const { t } = useTranslation();

  const courses = [
    { id: 1, color: '#7dff32ff', name: 'A1.1 ' + t("intensive"), duration: '3-4 ' + t("weeks") + ' (45h ' + t("total") + ')', type: t("beginningFrom")},
    { id: 2, color: '#7dff32ff', name: 'A1.2 ' + t("intensive"), duration: '3-4 ' + t("weeks") + ' (45h ' + t("total") + ')', type: t("beginningFrom")},
    { id: 3, color: '#68dd68ff', name: 'A2.1 ' + t("intensive"), duration: '3-4 ' + t("weeks") + ' (45h ' + t("total") + ')', type: t("beginningFrom")},
    { id: 4, color: '#68dd68ff', name: 'A2.2 ' + t("intensive"), duration: '3-4 ' + t("weeks") + ' (45h ' + t("total") + ')', type: t("beginningFrom")},

    { id: 5, color: '#ffff32ff', name: 'B1.1 ' + t("intensive"), duration: '3 ' + t("weeks") + ' (45h ' + t("total") + ')', type: t("beginningFrom")},
    { id: 6, color: '#ffff32ff', name: 'B1.2 ' + t("intensive"), duration: '3 ' + t("weeks") + ' (45h ' + t("total") + ')', type: t("beginningFrom")},
    { id: 7, color: '#f2bf27ff', name: 'B2.1 ' + t("intensive"), duration: '3 ' + t("weeks") + ' (45h ' + t("total") + ')', type: t("beginningFrom")},
    { id: 8, color: '#f2bf27ff', name: 'B2.2 ' + t("intensive"), duration: '3 ' + t("weeks") + ' (45h ' + t("total") + ')', type: t("beginningFrom")}
  ];

  return (
    <section
      id="courses"
      style={{
        padding: '1rem 2rem',
        backgroundColor: '#fbfbfbff'
    }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ textAlign: 'center', color: 'black', marginBottom: '1rem' }}>
          {t("coursesTitle")}
        </h2>
        <ul
          style={{
            listStyle: 'none',
            padding: '0px'
          }}
        >
          {courses.map(course => (
              <li
              id='courseList'
              key={course.id}
              style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 2fr 2fr',
                  gap: '2rem',
                  padding: '1rem 1.5rem',
                  borderBottom: '1px solid #eee',
                  backgroundColor: course.color,
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
        <div style={{ textAlign: 'justify' }}>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>
            {t("coursesText1")}
          </p>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: 'bold' }}>
            {t("coursesText2")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CoursesList;