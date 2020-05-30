import React, { Component } from 'react'
import './AccountPage.scss'



export default class AccountPage extends Component {
    render() {
        return (
            <React.Fragment >
            <div className="pay-parent pt-5">
                <div className="container pb-5 mb-5 bg-white pt-5">


                    <h1 className="text-center mt-4 account-color" >NATIONAL CYBER TRAINING PROGRAM</h1>
                    {/* <p className="Account-text ">Students who are approved will have to follow further Instructions of Fee Submission. Late Fee
                        Submission to the Due date will result in cancellation of Admission &amp; in result the seat will be
                        transferred/reserved for other NCTP Approved Applicants.</p> */}
                    <h3 className="account-color">Fee Details:</h3>
                    <p className="Account-text ">Students who are approved will have to follow further Instructions of Fee Submission. Late Fee
                        Submission to the Due date will result in cancellation of Admission &amp; in result the seat will be
                        transferred/reserved for other NCTP Approved Applicants.
                        <br/><br/>
                        The fee structure for NCTP students is only 450/- per month for 12 months for all 5 programs, payable
                        once annually 450*12= 5400/- after the Admission Confirmation. Students who wish to join 2 Programs at
                        the same time, will also have to pay Double Fee i.e. 10800/- for 12 months.
                        <br/><br/>
                        The Fee Structure for Overseas Pakistanis is only 5$/month (Five Dollar Per Month) for 12 months for all
                        programs, payable once annually 5*12= 60$ after the Admission Confirmation. Students with 2 Programs
                        will have to pay double fee i.e. 120$ for 12 months.
                        <br/><br/>
                        All over Pakistani there are a rare Universities offering Cyber Security Programs, also they are charging in
                        Millions from Students. NCTP is an Organization supported by Advisor to CM &amp; Governor Punjab where
                        you have to pay only 450/- month which are just managerial charges &amp; equal to Free.
                        <br/><br/>
                        <span className="account-color account-span"><b>Note:</b></span>&nbsp; NCTP Programs are highly prestigious &amp; jobs oriented programs which&#39;ll train students on
                        Advanced Level &amp; international standards with practical approach. Students will get a Certificate after
                        course completion which will be recognized by Government Departments. Also we&#39;ll prepare you for
                        international Exams.</p>   
                    <h1 className="text-center mt-4 account-color" >FEE SUBMISSION METHODS</h1>
                    <p className="text-center pl-5 pr-5"><b>
                    Students who are approved will have to follow further Instructions of Fee Submission. Late Fee
                    Submission to the Due date will result in cancellation of Admission &amp; in result the seat will be
                    transferred/reserved for other NCTP Approved Applicants.</b>
                    </p>  


                    <h2 className="mt-4 mb-3" >Fee Submission Via Bank Account:</h2>
                        <h4 className="text-white Deposit-slip" type="button" data-toggle="modal"  data-target=".bd-example-modal-lg">Click Here To See Fee Submission Via Bank Account</h4><br/>


                    <h2 className="mt-4 mb-3" >FEE SUBMISSION VIA JAZZCASH ACCOUNT:</h2>
                        <h5 className="text-white Deposit-slip" type="button" data-toggle="modal"  data-target=".Jazzcash">Click Here To See FEE SUBMISSION VIA JAZZCASH</h5>

                    <h2 className="mt-4 mb-3" >FEE SUBMISSION VIA EASYPAISA ACCOUNT:</h2>
                        <h5 className="text-white Deposit-slip" type="button" data-toggle="modal"  data-target=".easypaisa">Click Here To See FEE SUBMISSION VIA EASYPAISA ACCOUNT</h5>

                    <br/><br/>
                    <h3>NAME: <b>______________.</b></h3>
                    <h3 className="pb-4">Fee DeadLine: <b>______________.</b></h3>

                    <p className="Account-text ">After Form Submission, NCTP Support Team will take 48hrs for Fee Verification. After Verification
                        Students will get Fee Confirmation message by NCTP.</p> 
                    <p className="Account-text further-text">FURTER LEARNING INSTRUCTIONS &amp; PORTAL LOGIN CREDENTIALS WILL BE SENT TO      THE CONFIRMED STUDENTS VIA EMAIL /
                        SMS ONCE ADMISSIONS ARE CLOSED.</p> 

                    <p><b>
                        Dear Student submit your fee as soon as possible to complete your Admission Process. After Deadline,
                        NCTP will not be responsible for Securing Your Seat. 25K+ Students applied for now out of which 15390
                        Students has been confirmed Admission by NCTP.    
                        </b></p>
                        <h4><b>
                        Classes Schedule and LMS credentials will be sent to your Email
                        once Admissions are closed.    
                        </b></h4>
                    {/* <div className="d-flex justify-content-center"><h5 className="text-white Deadline  mx-auto">CHECK FEE SUBMISSION DEADLINE</h5></div> */}

                </div>

            </div>












                {/* Fee Submission model via bank account */}


                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title   mt-4 account-color" id="exampleModalLabel">NATIONAL CYBER TRAINING PROGRAM</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {/* body */}
                    <h4 className="mt-4 mb-3 " >Fee Submission Via Bank Account:</h4>
                    <p className="pl-4">Go to nearest branch of Bank Alfalah <br/>
                        Fill the Deposit Slip<br/> &nbsp;&nbsp;&nbsp;
                        Account Title: <b className="account-color">CYBERSKILLS</b><br/>&nbsp;&nbsp;&nbsp;
                        Account #:  <b className="account-color">5527-5001221844</b><br/>&nbsp;&nbsp;&nbsp;
                        If you applied for 1 Program, add amount: 5400/-<br/>&nbsp;&nbsp;&nbsp;
                        If you applied for 2 Programs, add amount 10,800/-<br/>&nbsp;&nbsp;&nbsp;
                        Pay the Fee &amp; Get a Picture of Deposit Slip<br/>&nbsp;&nbsp;&nbsp;
                        After Fee Submission, You have to fill this Fee Verification Form Online.</p>
                        <p className="text-center"><span className="pay-verification"><a className="text-white vari-link" href="https://forms.gle/Lt18btcRbDxCJJdH6" target="_blank">Click Here For Payment Verification Form</a></span></p>
                        
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;After Payment Form Submission, NCTP Support Team will take 48hrs for Fee Verification. After Verification Students will get Fee Confirmation message by
                        NCTP.<br/><br/>
                        FURTER LEARNING INSTRUCTIONS &amp; PORTAL LOGIN CREDENTIALS WILL BE SENT TO THE CONFIRMED STUDENTS VIA EMAIL / SMS ONCE ADMISSIONS ARE CLOSED.</p>
                        {/* body end  */}


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Fee Submission model Jazzcash account */}


                <div class="modal fade  Jazzcash" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title   mt-4 account-color" id="exampleModalLabel">NATIONAL CYBER TRAINING PROGRAM</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {/* body */}
                        
                        {/* Fee submission via Jazzcash */}

                    <h4 className="mt-4 mb-3" >FEE SUBMISSION VIA JAZZCASH ACCOUNT:</h4>
                        <p>
                        DIAL <b className="account-color"> *786*0# </b>ON MOBILE NUMBER &amp; ENTER THE <b className="account-color">TILL ID: 00006328</b> <br/>
                        <span className="account-color">OR</span> SUBMIT YOUR FEE TO THE <b className="account-color">JAZZCASH NUMBER: 03014163124</b><br/>&nbsp;&nbsp;&nbsp;
                        If you applied for 1 Program, add amount: 5400/-<br/>&nbsp;&nbsp;&nbsp;
                        If you applied for 2 Programs, add amount 10,800/-<br/>&nbsp;&nbsp;&nbsp;
                        Pay the Fee through Jazzcash Account &amp; Get a Screenshot/picture of Transaction ID.<br/><br/>&nbsp;&nbsp;&nbsp;
                        After Fee Submission, You have to fill this Fee Verification Form
                        </p>
                        <p className="text-center"><span className="pay-verification"><a className="text-white vari-link" href="https://forms.gle/VDVPC2EoK4gND4Ju9" target="_blank">Click Here For Payment Verification Form</a></span></p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;After Payment Form Submission, NCTP Support Team will take 48hrs for Fee Verification. After Verification Students will get Fee Confirmation message by
                        NCTP.<br/><br/>
                        FURTER LEARNING INSTRUCTIONS &amp; PORTAL LOGIN CREDENTIALS WILL BE SENT TO THE CONFIRMED STUDENTS VIA EMAIL / SMS ONCE ADMISSIONS ARE CLOSED.</p>
                            {/* body end  */}

                        
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
                
                {/* Fee Submission model easypaisa account */}


                <div class="modal fade easypaisa" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title   mt-4 account-color" id="exampleModalLabel">NATIONAL CYBER TRAINING PROGRAM</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {/* body */}





{/* Fee submission via easypaisa */}




                    <h4 className="mt-4 mb-3" >FEE SUBMISSION VIA EASYPAISA ACCOUNT:</h4>
                        <p>
                        SUBMIT YOUR FEE TO THE EASYPAISA ACCOUNT NUMBER: <b>03014163124</b> <br/>&nbsp;&nbsp;&nbsp;
                        If you applied for 1 Program, add amount: 5400/-<br/>&nbsp;&nbsp;&nbsp;
                        If you applied for 2 Programs, add amount 10,800/-<br/>&nbsp;&nbsp;&nbsp;
                        Pay the Fee through EasyPaisa Account &amp; Get a Screenshot/picture of Transaction ID.<br/><br/>&nbsp;&nbsp;&nbsp;
                        After Fee Submission, You have to fill this Fee Verification Form.
                        </p>
                        <p className="text-center"><span className="pay-verification"><a className="text-white vari-link" href="https://forms.gle/ZdZ26PBaoETurhcdA" target="_blank">Click Here For Payment Verification Form</a></span></p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;After Payment Form Submission, NCTP Support Team will take 48hrs for Fee Verification. After Verification Students will get Fee Confirmation message by
                        NCTP.<br/><br/>
                        FURTER LEARNING INSTRUCTIONS &amp; PORTAL LOGIN CREDENTIALS WILL BE SENT TO THE CONFIRMED STUDENTS VIA EMAIL / SMS ONCE ADMISSIONS ARE CLOSED.</p>
                            {/* body end  */}

                        
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
