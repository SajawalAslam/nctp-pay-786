import React, { Component } from 'react'
import './Home.scss'
import EnrolNav from '../EnrolNav/Enrolnav'
import SideNav from '../Sidenav/Sidemenu'
import img1 from './static/media/CUSTOMER_TESTIMONIALS-512.596bb2b8.png'
import img2 from './static/media/Group-icon.abc00c88.png'
import img3 from './static/media/telegram-icon.c95607f0.png'
import img4 from './static/media/accountant-clipart-male-1.54adcbae.png'
import img5 from './static/media/png_book.1d94fcef.png'
import img6 from './static/media/examColorIcon.90f8c51b.png'
import img7 from './static/media/announcementsIcon.dc668063.png'
import img8 from './static/media/literature-icon.c574be30.png'
import  '../socialMediaLinks/socialMedia.js'


export default class Home extends Component {
  render() {
    const oenSocialIcon = ()=>{
      document.getElementById('socialParrent').style.left = '78%';
      document.getElementById('socialParrent').style.transition = 'all 0.5s';
      document.getElementById('mysocialicontext').style.opacity="0"
    }
    const closeSocialIcon = ()=>{
      document.getElementById('socialParrent').style.left = '100%';
      document.getElementById('socialParrent').style.transition = 'all 0.5s';
      document.getElementById('mysocialicontext').style.opacity="1"
    }
    return (
      <div >
          

          <EnrolNav/>
          <div className="d-flex">
            <div className="side">
              <SideNav/>
              </div>
              <div className="container pt-5 pb-5">
                <div class="Homepage-heading">Welcome to NCTP Student Portal</div>
                <div class="Homepage-onlineInfo">You will be able to view lectures anytime online once they are available on portal</div>
                
                <div>
                  <div className="socialParrent border shadow" id="socialParrent">
                      <div className="mysocialicontext border pl-3 pr-3" id="mysocialicontext" onClick={oenSocialIcon}>Social Icons</div>
                      <div className="close-icon-my  pr-5"><i class="fas fa-window-close " onClick={closeSocialIcon}></i></div>
                      <div className="mysocialicons ">
                        <div class="mr-3 ml-3 icon-par">
                          <img className="fbicon my-home-icon-social" src={img2} />
                          <p className="i-text pl-2">Facebook Group</p>
                        </div>
                        <div class="mr-3 ml-3 icon-par">
                          <img className="fbicon my-home-icon-social" src={img3} />
                          <p className="i-text pl-2">Telegram Group</p>
                        </div>
                        <div class="mr-3 ml-3 icon-par">
                          <img className="fbicon my-home-icon-social" src={img1} />
                          <p className="i-text pl-2">Join Slack Channel</p>
                        </div>
                        <div class="mr-3 ml-3 icon-par">
                          <img className="fbicon my-home-icon-social" src={img4} />
                          <p className="i-text pl-2">Syllabus</p>
                        </div>
                        <div class="mr-3 ml-3 icon-par">
                          <img className="fbicon my-home-icon-social" src={img5} />
                          <p className="i-text pl-2">Text Books</p>
                        </div>
                        
                      </div> 
                       
                  </div>
                </div>
                <div class="Homepage-links-cont ">
                  <div className="row">
                    <div className="col-12">
                      <div className="border rounded mt-4 p-3 mb-4" style={{backgroundColor:'lightgrey'}}>
                      <p className="text-center text-danger font-weight-bolder"><b>STAY HOME, STAY SAFE, AND EARN BY LEARNING ONLINE CYBER PROGRAMS</b></p>
                      <p className=" text-danger text-right font-weight-bold">(COVID19) پورے پاکستان میں کورونا وائرس وبائی امراض کی وجہ سے ، نیشنل سائبر ٹریننگ پروگرام
ایک قومی وجہ کے طور پر پورے پاکستان اور بیرون ملک مقیم پاکستانیوں میں داخلہ آن لائن شروع کیا گیا ہے۔
این سی ٹی پی مشن انڈسٹری لیڈروں کے ساتھ ابھرتی ہوئی ٹیکنالوجیز کے لئے تکنیکی ورک فورس کو تشکیل دینے کے لئے اعلی درجے کی سائبر ہنر میں پاکستان کے نوجوانوں کو تربیت دینا ہے جو پاکستان کے دفاع ، نالج اکانومی اور عالمی ترقی میں اہم کردار ادا کرے گا۔ این سی ٹی پی آن لائن ٹریننگ پروگرام ہے جہاں ہمارے نوجوانوں کو عملی ٹولز کے ذریعہ جدید ترین سیکیورٹی کی تعلیم ملے گی جس سے وہ پہلے دن سے سائبرسیکیوریٹی کو ایک فعال پیشہ ور بننے میں مدد فراہم کریں گے۔
اس نقطہ نظر میں بیروزگاری کو کم کرنا ، سائبر ورلڈ سے آگاہی پیدا کرنا اور غیر ملکی کرنسی کی آمد میں اضافہکرکے پاکستان میں معاشی نمو کو بڑھانا ہے</p>
                    </div> 
                  </div>
                    <div className="col-12">
                      <div class="Homedown-heading">Our Mission</div>
                      <div className="container pl-3 "> 
                        <p class="Homedown-para"> <strong>NCTP</strong> mission is to train youth of Pakistan in Advanced Cyber Skillsets to shape technical work force for emerging technologies with Industry Leaders which will contribute in Pakistan's Defence, Knowledge Economy and global progress. NCTP is 100% online Training Program where our Youth will get a hands-on advanced security education with practical tools which will help them to become a functional cybersecurity professional from day one!</p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div class="Homedown-heading">Vision</div>
                      <div className="container pl-3 "> 
                        <p class="Homedown-para"> The vision is to reduce unemployment, create aweness of Cyber World and drive economic growth in Pakistan by increasing inflow of foreign currency. After Learning this Program honestly, one can earn minimum 5000$/month from international market.</p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div class="Homedown-heading">Advisor to CM</div>
                      <div className="container pl-3 "> 
                        <p class="Homedown-para"> Advisor to CM (Chief Minister) Rana Muhammad Tanveer said that NCTP is a Pakistan’s 1st Online Cyber Training Program at National Level with the aim to provide Online Cyber Security Knowledge to over 1 Million People across the country. NCTP Programme will play a leading role in securing Pakistan’s cyberspace and making Pakistan world’s premier nation in Cyber Security, An Initiative to Secure Pakistan’s Cyber Space from upcoming Cyber Threats.</p>
                        <br/>
                        <p class="Homedown-para"> NCTP mission is to train youth of Pakistan in Advanced Cyber Skillsets to shape technical work force for emerging technologies which will contribute in Pakistan's Defence, Knowledge Economy and global progress. NCTP is 100% online Training Program where our Youth will get a hands-on advanced security education with practical tools which will help them to become a functional cybersecurity professional from day one!</p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div class="Homedown-heading">Governor Punjab Message:</div>
                      <div className="container pl-3 "> 
                        <p class="Homedown-para">Governor Punjab said NCTP Programme is the the largest skill development programme in the country that would impart training on National Cyber Security, emerging technologies and latest advancements of the 21<sup>st</sup> century. All of the skill training programmes launched earlier were focusing on numbers of masses to be trained on conventional trade skills where nobody talked about Cyber Security and modern developments taking place in the world. I appreciate to NCTP Team working hard for the nation to aware them about modern education. Governor Punjab said that he ll fully support this initiative to promote it all across Pakistan for a National Cause.</p>
                        
                        <p class="Homedown-para">The youth should prepare themselves to get skill set training under this programme which would help them to seek relevant jobs in the industry and market along with the opportunity to get assistance to set up new businesses as well.</p>
                        
                        <p class="Homedown-para">Governor Punjab said, “Our target is to train 1 million students in future technologies through NCTP Programme where they would get job and business opportunities after getting skill based training."</p>
                        
                        <p class="Homedown-para">He said it was the vision of Prime Minister Imran Khan to have skill sets to enhance human resource in line with the job market trends and also enable the youth with better business opportunities.</p>
                        
                      </div>
                    </div>

                    <div className="col-12">
                      <div class="Homedown-heading">Why Cyber Security Training is Important?</div>
                      <div className="container pl-3 "> 
                        <p class="Homedown-para"> Cybersecurity training is important for several reasons. Technology is integrated into nearly every aspect of modern life; from our jobs, to our phones, to our cars and homes. As smart technology advances, the ways in which our lives can be greatly impacted by cybercrime increase dramatically. Unfortunately, the scope of the issue is often overlooked. This is because when we think of cybercrime and hacking, we tend to think of what makes national headlines, such as mass identity theft and stock manipulation. In reality there are countless ways that cyber-crimes can affect both your personal and business life, and it is important to realize that the worst outcome of these crimes isn’t always monetary loss.</p>
                        <p class="Homedown-para"> Imagine a time in the near future when the majority of the population owns self-driving cars. Now imagine the potential damage resulting from a breach in the cyber security of even one of those car companies. This is just one example of the many ways in which improper training, or general lack of training, could prove to be both costly, and deadly. In a world in which technology continues to advance exponentially, the more pertinent question is, in what way is cyber security training not important?</p>
                      </div>
                    </div>

                    <div className="col-12">
                      <div class="Homedown-heading">Jobs Market</div>
                      <div className="container pl-3 "> 
                        <p class="Homedown-para"> Cybersecurity jobs are growing three times faster than information technology jobs. However, this rapidly growing and very exciting industry lacks the number of skilled professionals required to handle the jobs. Some common jobs within Cybersecurity include information assurance, security analyst, penetration tester, malware analyst/reverse engineering and Intel. With these types of opportunities available, aspiring or growing cybersecurity professionals should focus on continually increasing their skill set, because the cybersecurity industry never rests, it is continually changing. However, traditionally, cybersecurity classes are the most expensive training classes. As you know, that barrier to entry has been removed.</p>

                        <p class="Homedown-para"> Cybersecurity training of all skill levels is now available to everyone so that the aspiring cybersecurity professionals can begin their career and those already in the field can become better and expand their opportunities. Together, we can contribute to everyone’s ability to learn.</p>
                      </div>
                    </div>

                    
                  </div>
                  
                  
                    {/* <table>
                        <tbody class="flexer ">
                            <tr class="mr-3 ml-3">
                                <td>
                                    <img src={img1} />
                                </td>
                                <th>Join Slack Channel</th>
                            </tr>
                            <tr class="mr-3 ml-3"><td><img src={img2} /></td><th>Facebook Group</th></tr><tr><td><img src={img3}/></td><th>Telegram Group</th></tr>
                            
                            <tr class="mr-3 ml-3"><td><img src={img4} /></td><th>Syllabus</th></tr><tr><td><img src={img5} /></td><th>Text Books</th></tr>
                            
                            <tr class="mr-3 ml-3"><td><img src={img6} /></td><th>Exam Details</th></tr><tr><td><img src={img7} /></td><th>Announcements</th></tr>
                            
                            <tr class="mr-3 ml-3"><td><img src={img8} /></td><th>Course Catalog</th></tr></tbody></table> */}
                </div>

                
              </div>
           </div>
      </div>
    )
  }
}
