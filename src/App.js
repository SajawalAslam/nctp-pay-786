import React , {Component} from 'react';
import './App.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login-portal/login'


// import EnrolNav from './Components/student-courses/Enrolnav'


import Enrolcourses from './Components/student-enrol/enrol.js'
import SideNav from './Components/Sidenav/Sidemenu'
import Proltalhome from './Components/portal-home/Home'
import ChangePassword from './Components/ChangePassword/ChangePass'
import PaymentStatus from './Components/PaymentStatus/PaymentStatus'
import OnlineLectureCourse from './Components/OnlineLecturescourse/OnlineLectureCourse'
import LactureTopics from './Components/LacturesTopics/LacturesTopics'
import VideoTopics from './Components/VideoTopics/VideoTopics'
import AccountPage from './Components/AccountPage/AccountPage';


function App() {
  return (
    <Router>
    <div className="App ">
      <Switch>
        <Route exact path="/" component={ AccountPage} />
         
        <Route path="/Courses" component={Enrolcourses} />

        <Route path="/Home" component={Proltalhome} />
        
        <Route path="/ChangePassword" component={ChangePassword} />

        <Route path="/PaymentStatus" component={PaymentStatus} />

        <Route path="/OnlineLectureCourse" component={OnlineLectureCourse} />

        <Route path="/LectureTopics" exact component={LactureTopics} />
        <Route path="/LectureTopics/:topic" exact component={LactureTopics} />

        {/* <Route path="/Lacture/:topic" exact component={LactureTopics} /> */}
        <Route path="/Topics"  component={VideoTopics} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
