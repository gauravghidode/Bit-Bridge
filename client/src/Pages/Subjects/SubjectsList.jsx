import React, { useEffect, useState } from 'react'
import './Subject.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SubjectsList = () => {

  // console.log(data);
  // const subjects=[{_id:"1", subjectName: "DCN"}, {_id:"2", subjectName: "Data Structures"}, {_id:"3", subjectName: "Operating Systems"}, {_id:"4", subjectName: "Computer Graphics"}, {_id:"5", subjectName: "Automata Theory"}, {_id:"6", subjectName: "Java"}, {_id:"7", subjectName: "Object Oriented Programming"}, {_id:"8", subjectName: "cryptography"}, {_id:"9", subjectName: "Discrete Mathematics"}, {_id:"10", subjectName: "Software engineering"}];
  const [subjects, setSubjects] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchSubject(quizId){
    setLoading(true)
    const a = await axios.get(`http://localhost:4000/subject/getSubjects`);
    setSubjects(a?.data?.data);
    setLoading(false);
  }
  useEffect(() => {
    fetchSubject();
  }, [])

  return (
    <div>
      {
        loading ? "Loading..." :
          <div className="main-bar">
            <div className="main-bar-header">
              <h1>Subjects</h1>
            </div>
            <div className="subjects-list-container">
              {loading && <p>Loading...</p>}
              {subjects && subjects.map((subject) => (
                <Link key={subject._id} to={`/Subjects/${subject._id}`} className='subject-link'>
                  <div className='subject'>
                    <h3>{subject.subjectName}</h3>
                    <p>{subject.subjectDescription}</p>
                  </div>
                </Link>
              ))}
              {!loading && !subjects && <p>No subjects found.</p>}
            </div>
          </div>
      }
    </div>

  )
}

export default SubjectsList