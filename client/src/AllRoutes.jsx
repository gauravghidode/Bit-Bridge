import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
import Contact from './Pages/Home/Contact';
import Auth from './Pages/Auth/Auth';
import Questions from './Pages/Questions/Questions';
import AskQuestion from './Pages/AskQuestion/AskQuestion';
import DisplayQuestion from './Pages/Questions/DisplayQuestion';
import Tags from './Pages/Tags/Tags';
import Users from './Pages/Users/Users';
import UserProfile from './Pages/UserProfile/UserProfile';
import Quiz from './Pages/Quiz/Quiz';
import QuizQuestions from './Pages/Quiz/QuizQuestions';
import AddQuiz from './Pages/Quiz/AddQuiz';
import Subjects from './Pages/Subjects/Subjects';
import SubjectName from './Pages/Subjects/SubjectName';

const AllRoutes = () => {
  return ( 
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/Auth' element={<Auth/>}></Route>
        <Route path='/Questions' element={<Questions/>}></Route>
        <Route path='/AskQuestion' element={<AskQuestion/>}></Route>
        <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
        <Route path='/Tags' element={<Tags/>}/>
        <Route path='/Users' element ={<Users/>}/>
        <Route path='/Users/:id' element={<UserProfile/>}/>
        <Route path='/Quiz' element={<Quiz/>}/>
        <Route path='/Quiz/:id' element={<QuizQuestions/>}/>
        <Route path='/AddQuiz' element ={<AddQuiz/>}/>
        <Route path='/Subjects' element ={<Subjects/>}/>
        <Route path='/Subjects/:id' element={<SubjectName/>}></Route>
    </Routes>
  )
}

export default AllRoutes;