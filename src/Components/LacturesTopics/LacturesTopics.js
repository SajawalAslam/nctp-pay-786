import React, { Component } from 'react'
import './LacturesTopics.scss'
import EnrolNav from '../EnrolNav/Enrolnav'
import SideNav from '../Sidenav/Sidemenu'
import {
    withRouter,
    Link
  } from "react-router-dom";

  


 class LactureTopics extends Component {
    
    render() {
        console.log(this.props)
        let content ;
         if(this.props.match.params.topic === 'interoductiontocnc'){
            content = (
                <React.Fragment>
                     <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>
                </React.Fragment>
            );
            // document.getElementById('topic-li-2').classList.add("active")
        }
        else if(this.props.match.params.topic === 'linux'){
            content = (
                <React.Fragment>
                     <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                
                </React.Fragment>
            );
            // const topic_li_3 = document.getElementById('topic-li-3').classList
            // topic_li_3.add("active")
        }
        else if(this.props.match.params.topic === 'docker'){
            content = (
                <React.Fragment>
                     <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>
                </React.Fragment>
            );
            // document.getElementById('topic-li-4').classList.add("active")
        }

        else if(this.props.match.params.topic === 'kubernate'){
            content = (
                <React.Fragment>
                     <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>
                </React.Fragment>
            );
            // document.getElementById('topic-li-5').classList.add("active")
        }

        else if(this.props.match.params.topic === 'git'){
            content = (
                <React.Fragment>
                     <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>
                </React.Fragment>
            );
            // document.getElementById('topic-li-6').classList.add("active")
        }
        else if(this.props.match.params.topic === 'backend'){
            content = (
                <React.Fragment>
                     <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/Topics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>
                </React.Fragment>
            );
            // document.getElementById('topic-li-7').classList.add("active")
        }
        else{
            content = (
                <React.Fragment>

                     <div class="card text-color mb-3 mx-auto " style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent pl-0 ml-2 pb-0">Course</div>
                        <h5 class="card-title text-color ml-2 pt-0">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className=" p-2  mb-4 ml-4">
                    <Link to="/Topics" class=" text-center topic-mybtn-co">Lets Start</Link>
                    </div>
                </div>
                </React.Fragment>
            );
        }
        console.log(content)
    return (
      <div>
        <EnrolNav/>
        
        <div className="lecture-side-track">
            <div className="row mr-0">
                <div className="col-sm-12 col-md-4">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="side"><SideNav/></div>
                        </div>
                        <div className="col-md-10 pr-0 pl-0">
                            <div className="Topic-name-track ">
                                <h3 className="Capter pb-3 text-white pl-1">Cloud Native And Mobile Web Computing</h3>
                                <ul className="topic-ul pl-0 pr-0 mr-0">
                                
                                <Link to="/LectureTopics">   <li className="topic-li  "  id="topic-li"><i class="fas fa-arrow-right  mt-1 pt-1"></i> &nbsp;1. Interoduction</li></Link>
                                <Link to="/LectureTopics/interoductiontocnc">  <li className="topic-li  " id="topic-li-2"><i class="fas fa-arrow-right  mt-1 pt-1"></i> &nbsp;2. Interoduction To CNC</li></Link>
                                <Link to="/LectureTopics/linux">   <li className="topic-li  "id="topic-li-3"><i class="fas fa-arrow-right  mt-1 pt-1"></i> &nbsp;3. Linux</li></Link>
                                <Link to="/LectureTopics/docker">   <li className="topic-li  "id="topic-li-4"><i class="fas fa-arrow-right  mt-1 pt-1"></i> &nbsp;4. Docker</li></Link>
                                <Link to="/LectureTopics/kubernate">   <li className="topic-li  " id="topic-li-5"><i class="fas fa-arrow-right  mt-1 pt-1"></i> &nbsp;5. Kubernate</li></Link>
           
                                <Link to="/LectureTopics/git">   <li className="topic-li  " id="topic-li-6"><i class="fas fa-arrow-right  mt-1 pt-1"></i> &nbsp;6. Git</li></Link>
                                <Link to="/LectureTopics/backend"><li className="topic-li  " id="topic-li-7"><i class="fas fa-arrow-right  mt-1 pt-1"></i> &nbsp;7. Back End</li></Link>

                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="col-sm-12 col-md-8 ml-auto pt-5 pb-5 mt-5 mb-5">
                    
                    {content}
               
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default withRouter(LactureTopics)
