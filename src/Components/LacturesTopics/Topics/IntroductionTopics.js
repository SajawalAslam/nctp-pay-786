import React, { Component } from 'react'
import '../LacturesTopics.scss'
import EnrolNav from '../../EnrolNav/Enrolnav'

import SideNav from '../../Sidenav/Sidemenu'
export default class InteroductionTopics extends Component {
  render() {
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
                        <div className="col-md-10 pr-0">
                            <div className="Topic-name-track">
                                <h3 className="Capter pb-3">Cloud Native And Mobile Web Computing</h3>
                                <ul className="topic-ul pl-0 pr-0 mr-0">
                                
                                <li className="topic-li border active">1. Interoduction</li>
                                    {/* <li className="topic-li border ">2. Interoduction To CNC</li>
                                    <li className="topic-li border ">3. Linux</li>
                                    <li className="topic-li border ">4. Docker</li>
                                    <li className="topic-li border ">5. Kubernate</li>
                                    <li className="topic-li border ">6. Git</li>
                                    
                                    <li className="topic-li border ">7. Back End</li> */}

                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="col-sm-12 col-md-8"></div>
            </div>
        </div>
      </div>
    )
  }
}
