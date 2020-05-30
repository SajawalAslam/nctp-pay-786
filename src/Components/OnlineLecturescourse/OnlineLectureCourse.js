import React, { Component } from 'react'
import './OnlineLectureCourse.scss'
import EnrolNav from '../EnrolNav/Enrolnav'
import SideNav from '../Sidenav/Sidemenu'
import {
    
  Link
} from "react-router-dom";

export default class OnlineLectureCourse extends Component {
  render() {
    return (
      <div>
          <EnrolNav/>
            <div className="side"><SideNav/></div>

            <div className="d-flex justify-content-center">
            <div className="container mt-5  card-courses-parent">
                    <div class="card text-color mb-3 mx-auto " style={{maxWidth: '35rem'}}>
                    <div className="p-4 bg-danger  "></div>
                    <div class="card-body my-card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title card-title-my text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2 my-card-text">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className=" p-2 border-my ">
                    <i class="fas fa-arrow-right course-arr-icon mt-1 pt-1"></i>
                    <Link to="/LectureTopics" class="btn my-font text-center onlinelec-course-card-sec2-btn "> View Course</Link>
                    </div>
                </div>
            </div>
            </div>
      </div>
    )
  }
}
