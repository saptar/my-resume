import React,{Component} from 'react';

class Education extends Component{
	render(){
		return(

			<li className="mb-2">
	              <div className="resume-degree font-weight-bold">{this.props.val.degree}</div>
	              <div className="resume-degree-org">{this.props.val.university}</div>
	              <div className="resume-degree-time">{this.props.val.duration}</div>
	        </li>
		);
	}
}

export default Education;