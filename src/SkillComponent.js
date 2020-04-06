import React, {Component} from 'react';

class Skill extends Component{
	render(){
		return(

			<li className="mb-2">
                <div className="resume-skill-name">{this.props.val.name}</div>
                <div className="progress resume-progress">
                <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: [`${this.props.val.proficiency}`]+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            	</div>
            </li>
		);
	}
}

export default Skill;