import React from 'react'
import HomePage from './Pages/HomePage'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CategoriesPage from './Pages/CategoriesPage';
import About from './Components/About';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import JobPostForm from './Components/JobPostForm';
import PostJobFormPage from './Pages/PostJobFormPage';
import RegisterPage from './Pages/RegisterPage';
import DashBoard from './Components/DashBoard';
import ApplyNowForm from './Components/ApplyNowForm';


function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/'
                    element={<HomePage/>}></Route>
                <Route path='/categories'
                    element={<CategoriesPage/>}></Route>
                <Route path='/about'
                    element={<AboutPage/>}></Route>
                <Route path='/contact'
                    element={<ContactPage/>}></Route>
                    <Route path='/login'
                    element={<LoginPage/>}></Route>
                      <Route path='/signup'
                    element={<SignupPage/>}></Route>
                    <Route path='/register'
                    element={<RegisterPage/>}></Route>
                    <Route path='/jobform'
                    element={<PostJobFormPage/>}></Route>
                      <Route path='/dashboard' element={<DashBoard/>}></Route>
                      <Route path='/applyform' element={<ApplyNowForm/>}></Route>
            </Routes>

        </BrowserRouter>


    )
}

export default App
