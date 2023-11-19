import React from 'react'
import './Subject.css';
import { Link } from 'react-router-dom';

const SubjectsList = () => {

    const subjects=[{_id:"1", subjectName: "DCN"}, {_id:"2", subjectName: "Data Structures"}, {_id:"3", subjectName: "Operating Systems"}, {_id:"4", subjectName: "Computer Graphics"}, {_id:"5", subjectName: "Automata Theory"}, {_id:"6", subjectName: "Java"}, {_id:"7", subjectName: "Object Oriented Programming"}, {_id:"8", subjectName: "cryptography"}, {_id:"9", subjectName: "Discrete Mathematics"}, {_id:"10", subjectName: "Software engineering"}];
    console.log(subjects.sort(function(a, b){return a.subjectName - b.subjectName}));
  return (
    <div className="main-bar">
    <div className="main-bar-header">
        <h1>Subjects</h1>
    </div>
    <div className="subjects-list-container">
      {subjects.map((subject) => (
        <Link to={`/Subjects/${subject._id}`} className='subject-link'>
            <div className='subject'>
                <h4>{subject.subjectName}</h4>
                <p>Description</p>
            </div>
            
        </Link>
      ))}
    </div>
  </div>
  )
}

export default SubjectsList