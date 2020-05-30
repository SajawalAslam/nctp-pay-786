import React, { Component } from 'react'
import './videoTopics.scss'
import EnrolNav from '../EnrolNav/Enrolnav'
// import SideNav from '../Sidenav/Sidemenu'
import {
    withRouter,
    Link
  } from "react-router-dom";

  


 class videoTopics extends Component {
    
    render() {
        const oencomentIcon = ()=>{
            document.getElementById('coment-parent').style.left = '68%';
            document.getElementById('coment-parent').style.transition = 'all 0.5s';
            document.getElementById('openComments').style.opacity="0"
          }
          const closecomentIcon = ()=>{
            document.getElementById('coment-parent').style.left = '100%';
            document.getElementById('coment-parent').style.transition = 'all 0.5s';
            document.getElementById('openComments').style.opacity="1"
          }
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
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>
                </React.Fragment>
            );
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
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                
                </React.Fragment>
            );
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
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>
                </React.Fragment>
            );
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
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>
                </React.Fragment>
            );
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
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>
                </React.Fragment>
            );
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
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>

                <div class="card text-color mb-3 mx-auto" style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div>
                </React.Fragment>
            );
        }
        else{
            content = (
                <React.Fragment>
                    <div className="coment-parent" id="coment-parent">
                            <div className="openComments  border " id="openComments" onClick={oencomentIcon}>See Comments</div>
                        <div className="coment-parent-iner shadow" id="coment-parent-iner">
                            <div className="close-icon-my pt-3 pr-3"><i class="fas fa-window-close "  onClick={closecomentIcon}></i></div>
                        </div>
                    </div>

                    <iframe  className="pb-5 mb-2" width="100%" height="500" src="https://www.youtube.com/embed/N08Y7o_Gy_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                    <div class="input-group mb-2 ">
                        <input type="text" class="form-control" placeholder="Comments" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <span class="input-group-text my-comment-button" id="basic-addon2">Submit</span>
                        </div>
                    </div>
                     {/* <div class="card text-color mb-3 mx-auto " style={{maxWidth: '35rem'}}>
                    <div class="card-body text-success">
                    <div class="card-header text-color border-0 bg-transparent ">Course</div>
                        <h5 class="card-title text-color ml-2">Cloud Native and Mobile Web Computing</h5>
                        <p class="card-text text-color ml-2">A one year Cloud Computing program designed for absolute beginners. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</p>
                    </div>
                    <div className="text-right p-2 border-my ">
                    <Link to="/LectureTopics" class="btn text-center onlinelec-course-card-sec2-btn">View Course</Link>
                    </div>
                </div> */}
                
                </React.Fragment>
            );
        }
        console.log(content)
    return (
      <div>
        <EnrolNav/>
        
        <div className="lecture-side-track">
            <div className="row mr-0">
                <div className="col-sm-12 col-md-3">
                    <div className="row">
                        {/* <div className="col-md-2"> */}
                            {/* <div className="side"><SideNav/></div> */}
                        {/* </div> */}
                        <div className="col-md-12 pr-0">
                            <div className="Topic-name-track">
                            <Link to="/LectureTopics"><div className="Back mb-3"><h3>Go Back</h3></div></Link>
                                <h3 className="Capter pb-3">Interoduction</h3>
                                <ul className="topic-ul pl-0 pr-0 mr-0">
                                
                                <Link to="/Topics">   <li className="topic-li  ">1. Interoduction</li></Link>
                                {/* <Link to="/LectureTopics/interoductiontocnc">  <li className="topic-li  ">2. Interoduction To CNC</li></Link>
                                <Link to="/LectureTopics/linux">   <li className="topic-li  ">3. Linux</li></Link>
                                <Link to="/LectureTopics/docker">   <li className="topic-li  ">4. Docker</li></Link>
                                <Link to="/LectureTopics/kubernate">   <li className="topic-li  ">5. Kubernate</li></Link>
                                <Link to="/LectureTopics/git">   <li className="topic-li  ">6. Git</li></Link>
                                <Link to="/LectureTopics/backend"><li className="topic-li  ">7. Back End</li></Link> */}

                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="col-sm-12 col-md-9 ml-auto pt-5 pb-5 mt-5 mb-5 pr-5">
                
                    {content}
               
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default withRouter(videoTopics)
