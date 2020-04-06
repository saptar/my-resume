import React, {Component} from 'react';

class WorkExperience extends Component{
	techUsed=()=>{
		let tecArr =this.props.val.tech;
		let displayArr = [];
		tecArr.map((item, i)=>displayArr.push(<TechBadge key={i} data={item}/>));
		return displayArr;
	}
	render(){
		return(

			<article className="resume-timeline-item position-relative pb-5">
                        
	            <div className="resume-timeline-item-header mb-2">
	              <div className="d-flex flex-column flex-md-row">
	                  <h3 className="resume-position-title font-weight-bold mb-1">{this.props.val.title}</h3>
	              </div>
	              <div className="resume-position-time">For:{this.props.val.company}</div>
	              <div className="resume-position-time">{this.props.val.duration}</div>
	            </div>
	            <div className="resume-timeline-item-desc">
	              <p>{this.props.val.description}</p>
	              
	              <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
	              <ul className="list-inline">
	              	{this.techUsed()}
	              </ul>
	            </div>

	        </article>

		);
	}
}

function TechBadge(props){
	return(

	<li className="list-inline-item"><span className="badge badge-primary badge-pill">{props.data}</span></li>

	);
}

export default WorkExperience;