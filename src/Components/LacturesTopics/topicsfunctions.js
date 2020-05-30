console.log(this.props)
        let content ;
        if(this.props.match.params.topic === 'interoduction'){
            content = (
                <React.Fragment>
                     <div class="card text-color mb-3 " style={{maxWidth: '35rem'}}>
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
        console.log(content)