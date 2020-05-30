import React, { Component } from 'react'
import './Sidemenu.scss'
import SideNavLogoImg from './portal-homeiCON-images/img/portal png logo.png'
import icon1 from './portal-homeiCON-images/home.33dba9fc.svg'
import icon2 from './portal-homeiCON-images/avatar.340b0bcd.svg'
import icon3 from './portal-homeiCON-images/payment-method.0a58a70f.svg'
import icon4 from './portal-homeiCON-images/libraryIcon.258f9f66.svg'
import icon5 from './portal-homeiCON-images/bookIcon.b153bda1.svg'
import icon6 from './portal-homeiCON-images/examIcon.3df84458.svg'
import icon7 from './portal-homeiCON-images/announcements.68ac8d54.svg'
import Onenav from '../EnrolNav/Enrolnav'
import {
    
    Link
  } from "react-router-dom";


export default class SideNav extends Component {
    openNav=()=> {
        document.getElementById("mySidenav").style.width = "290px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      }
      
      render() {
        
          const sideBarOver=()=>{

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
              document.getElementById("side-nav-img").style.height = "250px";
      
              document.getElementById("round-div-img").style.height = "180px";
              document.getElementById("round-div-img").style.width = "180px";
      
              document.getElementById("side-nav-logo").style.height = "180px";
              document.getElementById("side-nav-logo").style.width = "180px";

                i.style.display = "initial";
                i2.style.display = "initial";
                i3.style.display = "initial";
                i4.style.display = "initial";
                i5.style.display = "initial";
                i6.style.display = "initial";
                i7.style.display = "initial";
                i8.style.display = "initial";
                i9.style.display = "initial";
              
          }
          const sideBarout=()=>{
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
            document.getElementById("side-nav-img").style.height = "80px";
    
            document.getElementById("round-div-img").style.height = "50px";
            document.getElementById("round-div-img").style.width = "50px";
    
            document.getElementById("side-nav-logo").style.height = "50px";
            document.getElementById("side-nav-logo").style.width = "50px";

            i.style.display = "none";
            i2.style.display = "none";
            i3.style.display = "none";
            i4.style.display = "none";
            i5.style.display = "none";
            i6.style.display = "none";
            i7.style.display = "none";
            i8.style.display = "none";
            i9.style.display = "none";
        }
    return (
        <div className="sidebar  " id="sidebar" onMouseOver={sideBarOver} onMouseOut={sideBarout} >
            <div>
                <div className="side-nav-img " id="side-nav-img">
                    <div className="round-div-img " id="round-div-img" > 
                        <img className="side-nav-logo" id="side-nav-logo" src={SideNavLogoImg}  />
                    </div>
                </div>
<div className="ul-parent">
                <ul className="li-parent ">
                    <li className="p-3 pb-0 mb-2 child-li ">
                        {/* <img src={icon1} className="icon" />  */}
                        <span >
                            <svg fill="currentColor" fill-rule="evenodd" height="100%" viewBox="0 0 24 24" width="100%" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M12 3.15l-9 9.472 1.352 1.433L12 6.007l7.648 8.048L21 12.622z"></path><path d="M12 6.007l-7 7.366v2.132l7.475-9z" opacity=".6"></path><path d="M12.475 6.506l-.475.57V14l2 .002V21h5v-7.627z" opacity=".8"></path><path d="M5 15.505V21h5v-7h2V7.077z"></path></svg>
                        </span>
                        <Link to="/Home" className="icon-text p-4 mt-5 " id="icon-text">Home</Link>
                    </li>
                    <li className="p-3  child-li profile-nav-text">
                        {/* <img src={icon2} className="icon" />  */}
                        <span>
                            <svg fill="currentColor" fill-rule="evenodd" height="100%" viewBox="0 0 24 24" width="100%" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M12 2.084V5.44a2.56 2.56 0 0 1 0 5.12V12c1.335 0 4 .824 4 2.46v1.265c-.065.094-.126.19-.195.283A7.433 7.433 0 0 1 12 18.738v2.827a11.062 11.062 0 0 0 8-10.667v-5.48l-8-3.334z" opacity=".8"></path><path d="M12 2.084V5.44a2.56 2.56 0 0 0 0 5.12V12c-1.335 0-4 .824-4 2.46v1.265c.065.094.126.19.195.283A7.433 7.433 0 0 0 12 18.738v2.827a11.062 11.062 0 0 1-8-10.667v-5.48l8-3.334z"></path></svg>
                        </span>

                        <span className="icon-text p-4 mt-5  " id="icon-text-2">Profile &nbsp; <i class="fas fa-sort-down sde-arr-icon"></i></span>
                        <ul className="text-white sub-ul-1 " id="sub-ul-1">
                        <li className="p-3 sub-ul-li mt-3 " onClick={this.openNav} style={{color:"#858585"}}>Info</li>
                        <li className="p-3 sub-ul-li" ><Link to="/" style={{color:"#858585"}}>Logout</Link></li>
                        <li className="p-3 sub-ul-li"><Link to="/ChangePassword" style={{color:"#858585"}}>Change Password</Link></li>
                </ul>
                        
                    </li>
                    
                    <li className="p-3 pb-0 mb-2 pb-0 mb-2 child-li profile-nav-text">
                        {/* <img src={icon3} className="icon" />  */}
                        <span>
                            <svg fill="currentColor" fill-rule="evenodd" height="100%" viewBox="0 0 24 24" width="100%" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M3 7h9v2H3z" opacity=".4"></path><path d="M12 7h9v2h-9z" opacity=".3"></path><path d="M5 11h14v2H5z" opacity=".6"></path><path d="M4 5a1 1 0 0 0-1 1v1h9V5H4z"></path><path d="M20 5h-8v2h9V6a1 1 0 0 0-1-1z" opacity=".9"></path><path d="M12 11V9H3v9a1 1 0 0 0 1 1l8-.004V13H5v-2h7zm-4 4v2H5v-2h3z"></path><path d="M5 15h3v2H5z" opacity=".4"></path><path d="M12 9v2h7v2h-7v5.996l8-.004a1 1 0 0 0 1-1V9h-9zm3 7h-1v-1h1v1zm3 0h-1v-1h1v1z" opacity=".9"></path><path d="M14 15h1v1h-1zm3 0h1v1h-1z" opacity=".6"></path></svg>
                        </span>
                        <span className="icon-text p-4 mt-3 " id="icon-text-3"><Link to="/PaymentStatus" style={{color:"#858585"}}>Payment</Link></span>
                        {/* <ul className="text-white sub-ul-1" id="sub-ul-1">
                            <li className="p-3 sub-ul-li mt-3"><Link to="/PaymentStatus" style={{color:"#858585"}}>Payment Status</Link></li>
                            <li className="p-3 sub-ul-li mt-3"><Link to="/PaymentStatus" style={{color:"#858585"}}>Payment Branches</Link></li>
                        </ul> */}
                    </li>
                    <li className="p-3 pb-0 mb-2 child-li">
                        {/* <img src={icon4} className="icon" />  */}
                        <span>
                            <svg fill="currentColor" height="100%" viewBox="0 0 24 24" width="100%" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M20.572 11.388v5.69h1.918V9.403z"></path><path d="M22.487 9.408l-1.915 1.04v.94z" fill-opacity=".6"></path><path d="M11.94 15.16l8.632-4.71 1.918-1.046L11.94 3.65z"></path><path d="M1.39 9.404l10.55 5.755V3.65z" fill-opacity=".8"></path><path d="M11.94 20.913l6.714-3.663v-3.837l-6.714 3.664z"></path><path d="M5.226 17.25l6.714 3.663v-3.836l-6.714-3.664z" fill-opacity=".8"></path></svg>
                        </span>
                        <span className="icon-text p-4 mt-5 " id="icon-text-4"><Link to="/OnlineLectureCourse" style={{color:"#858585"}} >Online Lectures</Link></span>
                    </li>
                    <li className="p-3 pb-0 mb-2 child-li">
                        {/* <img src={icon5} className="icon" />  */}
                        <span>
                            <svg width="100%"  fill="currentColor" height="100%" viewBox="0 0 24 24" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                                <path d="M5.778 4C4.796 4 4 4.796 4 5.778v12.444C4 19.204 4.796 20 5.778 20h12.444c.982 0 1.778-.796 1.778-1.778V5.778C20 4.796 19.204 4 18.222 4H5.778zM17 8H7V7h10v1zm0 3H7v-1h10v1zm0 3H7v-1h10v1zm-2 3H7v-1h8v1z" fill-rule="evenodd"></path>
                            </svg>
                        </span>
                        <span className="icon-text p-4 mt-5 " id="icon-text-5">Text Books</span>
                    </li>
                    <li className="p-3 pb-0 mb-2 child-li">
                        {/* <img src={icon6} className="icon" />  */}
                        <span>
                        <svg fill="currentColor" fill-rule="evenodd" height="100%" viewBox="0 0 24 24" width="100%" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M12 1.244L3 5.156v5.866c0 5.427 3.84 10.502 9 11.734V1.244zm0 10.746v8.742V12H5V6.427l7-3.04v8.603z" fill-rule="nonzero" opacity=".6"></path><path d="M12 1.244v21.512c5.16-1.232 9-6.307 9-11.734V5.156l-9-3.912zm7 10.746c-.53 4.03-3.28 7.617-7 8.742V12l7-.01z" fill-rule="nonzero" opacity=".8"></path><path d="M20.96 12h-1.955s-.04.284-.094.568L20.96 12zM3.048 12h1.947v-.557z"></path></svg>
                        </span>
                        <span className="icon-text p-4 mt-5 " id="icon-text-6">Quizes</span>
                    </li>
                    <li className="p-3 pb-0 mb-2 child-li">
                        {/* <img src={icon7} className="icon" />  */}
                        <span>
                            <svg fill="currentColor" fill-rule="evenodd" height="100%" viewBox="0 0 24 24" width="100%" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M6.042 3H17.96l.917 2.063H5.125zm-2.75 3.438h17.416l.917 2.062H2.375z" opacity=".8"></path><path d="M8.562 11.938h6.88l-.69 1.375H9.245z" opacity=".6"></path><path d="M23 20.188v-9.625h-6.875l-1.375 2.75h-5.5l-1.375-2.75H1v9.624h12.096z" fill-rule="nonzero"></path></svg>
                        </span>
                        <span className="icon-text p-4 mt-5 " id="icon-text-7">Assignment</span>
                    </li>
                    <li className="p-3 pb-0 mb-2 child-li">
                        {/* <img src={icon7} className="icon" />  */}
                        <span>
                            
                        </span>
                        <span className="icon-text p-4 mt-5 " id="icon-text-8">Announcements</span>
                    </li>
                    {/* <li className="p-3  child-li"> */}
                        {/* <img src={icon7} className="icon" />  */}
                        {/* <span>
                            <svg viewBox="0 0 24 24" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><path opacity=".27" d="M6 15.8l6-10.5 6 10.5 5 5 .2.2L12 1.6.8 21l.2-.2z"></path><path d="M12 9.7L1 20.8l4.6-2.1 6.4-6.4 6.4 6.4 4.6 2.1z" opacity=".56"></path><path opacity=".52" d="M6 20.6l-4.2 1.8h20.4L18 20.6z"></path><path opacity=".53" d="M23 20.8l-11-5-11 5-1 1.6h1.8L12 17.8l10.2 4.6H24z"></path></svg>
                        </span>
                        <span className="icon-text p-4 mt-5 text-white">Announcements</span>
                    </li> */}
                    
                      
                      
                
                </ul>
</div>
<ul className="li-parent ">
<li className="p-3 pb-0 mb-3 child-li ">
                        {/* <img src={icon7} className="icon" />  */}
                        <span>
                        <svg className="lastsvg" fill="currentColor" fill-rule="evenodd" height="100%" viewBox="0 0 24 24" width="100%" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M11.998 16.045c-1.185 0-3-2.256-3-4.205V9.38l3-1.252V5.963L7 8.045v3.795c0 2.71 2.424 6.204 4.998 6.204l.023-.002H12v-1.997z" opacity=".8"></path><path d="M17 8.045l-5-2.082v2.165l3 1.25v2.462c0 1.95-1.815 4.205-3 4.205v1.997h.023c2.567-.02 4.977-3.5 4.977-6.202V8.045z" opacity=".6"></path><path d="M12.38 13.39c-.418.42-1.098.42-1.518 0L9.368 11.9l.76-.76 1.494 1.493 4.27-4.264.76.75-4.27 4.26z"></path><path d="M4.226 16.95l1.81.36c-2.622-2.906-2.758-7.245-.397-10.277l.71.715.71-3.54-3.55.708.74.746a9.95 9.95 0 0 0-2.23 5.64 7.88 7.88 0 0 0-.03.72c0 .13.01.26.01.39.01.216.02.433.04.65.01.127.03.253.05.38.03.22.07.44.112.656.024.122.056.24.085.36a9.768 9.768 0 0 0 .583 1.666c.05.1.093.203.14.304.116.227.24.452.37.672.055.087.1.175.158.26.15.24.32.473.494.7.046.063.09.127.136.188.116.143.25.275.37.414L4.2 16.95z" opacity=".8"></path><path d="M20.537 7.748l-.71-3.54-.726.726v-.008a9.697 9.697 0 0 0-.31-.297l-.17-.18a9.988 9.988 0 0 0-5.58-2.42v.01a10.074 10.074 0 0 0-3.22.19l-.08.02a9.96 9.96 0 0 0-1.85.63 7.107 7.107 0 0 0-.28.13 9.97 9.97 0 0 0-.65.35c-.1.06-.2.11-.3.18-.21.13-.41.28-.61.43-.09.06-.18.13-.27.2-.14.11-.27.24-.41.36l1.71-.33-.33 1.68c3.15-2.72 7.93-2.59 10.94.41l.03.032-.71.7 3.545.71z"></path><path d="M19.946 12.998a7.863 7.863 0 0 1-2.252 4.652c-2.883 2.878-7.418 3.09-10.576.66l.654-.653-3.546-.708.71 3.53.75-.75a10.01 10.01 0 0 0 7.196 2.22c.04-.01.08-.01.12-.01.267-.03.532-.07.797-.12l.19-.03c.26-.06.51-.12.77-.19.06-.02.13-.04.19-.06a9.667 9.667 0 0 0 .94-.34 10.8 10.8 0 0 0 .73-.34l.16-.09a12.8 12.8 0 0 0 .72-.43l.12-.09a9.933 9.933 0 0 0 1.47-1.21c.11-.108.202-.225.31-.338.14-.156.282-.308.412-.47.084-.107.16-.217.237-.324.15-.204.3-.41.43-.62.054-.08.1-.17.15-.25a9.536 9.536 0 0 0 .484-.92 9.47 9.47 0 0 0 .75-2.765l-1.946-.39z" opacity=".6"></path></svg>
                        </span>
                        <span className="icon-text p-4 mt-5 last-icon-text" id="icon-text-9">Website</span>
                    </li>
</ul>
            </div>
        </div>
    )
  }
}
