import React, { Component } from 'react'
import logo from './img/logo navbar.png'
import Proimg from './img/pro-img.jpg'
import './Enrolnav.scss'
import Sidebar from '../Sidenav/Sidemenu'


export default class Enrolnav extends Component {
  

  openNav=()=> {
    document.getElementById("mySidenav").style.width = "290px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  closeNav=()=> {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
  }

  infoPro = ()=>{
    var x = document.getElementById("table");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
  openSideMenu= ()=>{
    let s = document.getElementById("sidebar");
    let i = document.getElementById("icon-text");
    let i2 = document.getElementById("icon-text-2");
    let i3 = document.getElementById("icon-text-3");
    let i4 = document.getElementById("icon-text-4");
    let i5 = document.getElementById("icon-text-5");
    let i6 = document.getElementById("icon-text-6");
    let i7 = document.getElementById("icon-text-7");
    let i8 = document.getElementById("icon-text-8");
    let i9 = document.getElementById("icon-text-9");
    let side_nav_img = document.getElementById("side-nav-img").style;
    let round_div_img = document.getElementById("round-div-img").style;
    let side_nav_logo = document.getElementById("side-nav-logo").style;
    // let sub_li = document.getElementById("sub-ul-1");

  if(s.style.width === "290px") {
    console.log('85')
    s.style.width = "65px";
    // sub_li.style.display = "none";
    i.style.display = "none";
    i2.style.display = "none";
    i3.style.display = "none";
    i4.style.display = "none";
    i5.style.display = "none";
    i6.style.display = "none";
    i7.style.display = "none";
    i8.style.display = "none";
    i9.style.display = "none";
    side_nav_img.height= '80px';
    // side_nav_img.transition='all 0.5s';
    round_div_img.height= '50px';
    round_div_img.width='50px';
    // round_div_img.transition='all 0.5s';
    side_nav_logo.height= '50px';
    side_nav_logo.width='50px';
    // side_nav_logo.transition='all 0.5s';

  } else {
    console.log('250')
    s.style.width = "290px";
    // sub_li.style.display = "initial";
    i.style.display = "initial";
    i2.style.display = "initial";
    i3.style.display = "initial";
    i4.style.display = "initial";
    i5.style.display = "initial";
    i6.style.display = "initial";
    i7.style.display = "initial";
    i8.style.display = "initial";
    i9.style.display = "initial";
    

    side_nav_img.height= '250px';
    // side_nav_img.transition='all 0.5s';
    round_div_img.height= '180px';
    round_div_img.width='180px';
    // round_div_img.transition='all 0.5s';
    side_nav_logo.height= '180px';
    side_nav_logo.width='180px';
    // side_nav_logo.transition='all 0.5s';
  }
  }
 render() {
    return (
        <div className="parent-nav">
            <nav className="d-flex justify-content-between    pr-3" >
              <div className="imgParent pt-2" style={{cursor:"pointer"}}>
                {/* <img class="enroll-logo " src={logo} alt="NCTP LOGIN PORTAL LOGO" /> */}
                <i onClick={this.openSideMenu} class="fas fa-bars bar-icon"> &nbsp; <span>STUDENT PORTAL</span></i>
                
              </div>
              <div className="nav-text mt-1">
                <p>NATIONAL CYBER TRAINING PROGRAM (NCTP)</p>
              </div>
              <div className="profile mt-1" >
                  <img class="enroll-logo " src={Proimg} onClick={this.openNav}  alt="Profile Image" />
              </div>
            </nav>
            <div id="mySidenav" class="sidenav">
              <div className="side-bar pt-5 pb-5">
              <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
              <div class="sidebar-image"  style={{backgroundImage: 'url(' + Proimg + ')'}}>
              </div>

              <p class="sidebarInfoNameHeading">Adil Nawaz</p>
              <div>
                <div className="row  mt-5 info-parent ml-0 pt-3">
                  <div class="col-2 ">
                  <svg class="jss86" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>
                  </div>
                  <div class="col-8 " id="pro-info" onClick={this.infoPro}>
                    <p className="profile-info">Info</p>
                    
                  </div>

                  <div class="col-2 " onClick={this.infoPro}>
                  <div class="jss70 jss137 jss69" tabindex="-1" role="button" aria-hidden="true"><span class="jss142"><svg class="jss86" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg></span><span class="jss147"></span></div>
                  </div>
                </div>
                <table class="table mt-1 mr-0" id="table">
                  <tbody>
                    <tr>
                      <th scope="row">Name</th>
                      <td>Adil Nawaz</td>
                    </tr>
                    <tr>
                      <th scope="row">S/O</th>
                      <td>Muhammad Nawaz Shahid</td>
                    </tr>
                    <tr>
                      <th scope="row">Roll No</th>
                      <td>MKM5632J</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>Adilnawaz5435@gmail.com</td>
                    </tr>
                    <tr>
                      <th scope="row">City</th>
                      <td>Karachi</td>
                    </tr>
                    <tr>
                      <th scope="row">Gander</th>
                      <td>Male</td>
                    </tr>
                  </tbody>
                </table>
                <div className="row info-parent  mt-4 ml-0 pt-3">
                  <div class="col-2">
                  <div class="jss85"><svg class="jss86" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path><path fill="none" d="M0 0h24v24H0V0z"></path></svg></div>
                  </div>
                  <div class="col-8 "><p>Logout</p></div>
                  <div class="col-2"></div>
                </div>
              </div>
            </div>
            </div>
            
        </div>
    )
  }
}
