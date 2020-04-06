import React, {Component} from 'react';
import cn from 'classnames';
import WorkExperience from './WorkExperience';
import Skill from './SkillComponent';
import Education from './EducationComponent';
import data from './data.json'
import './App.css';

class App extends Component {
  
  displaySocialLinks = () =>{
    let linkArr = [];
    data.social.map((item, i)=>linkArr.push(<SocialLink key={i} val={item}/>));
    return linkArr;

  }

  workExperience = () =>{
    let expArr = [];
    data.workExperience.map((item,i)=>expArr.push(<WorkExperience key={i} val={item}/>));
    return expArr;
  }

  skillProficiency = ()=>{
    let skillArr = [];
    data.skill.map((item,i)=>skillArr.push(<Skill key={i} val={item}/>));
    return skillArr;
  }

  otherSkills =()=>{
    let otherSkillArr = [];
    data.otherSkill.map((item, i)=>otherSkillArr.push(<OtherSkill key={i} val={item}/>));
    return otherSkillArr;
  }

  educationDetails = () =>{
    let eduArr = [];
    data.education.map((item,i)=>eduArr.push(<Education key={i} val={item}/>));
    return eduArr;
  }

  language=()=>{
    let langArr =[];
    data.language.map((item, i)=>langArr.push(<Language key={i} val={item}/>));
    return langArr;
  }

  interest=()=>{
    let interestArr=[];
    data.interest.map((item,i)=>interestArr.push(<Interest key={i} val={item}/>));
    return interestArr;
  }
  render(){
    return (
      <article className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <header className="resume-header pt-4 pt-md-0">
            <div className="media flex-column flex-md-row">
              <img className="mr-3 img-fluid picture mx-auto" src={data.profileImage} alt=""/>
              <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                <div className="primary-info">
                  <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">{data.name}</h1>
                  <div className="title mb-3">{data.title}</div>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="mailto:{data.emailid}"><i className="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>{data.emailid}</a></li>
                    <li><a href="#"><i className="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>{data.phone}</a></li>
                  </ul>
                </div>
                <div className="secondary-info ml-md-auto mt-2">
                  <ul className="resume-social list-unstyled">
                    {this.displaySocialLinks()}
                          
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div className="resume-body p-5">
            <section className="resume-section summary-section mb-5">
              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
              <div className="resume-section-content">
                <p className="mb-0">{data.carrierSummary}</p>
              </div>
            </section>
            <div className="row">
              <div className="col-lg-9">
                <section className="resume-section experience-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
                  <div className="resume-section-content">
                    <div className="resume-timeline position-relative">
                      {this.workExperience()}
                      
                    </div>
                    
                    
                    
                    
                    
                    
                  </div>
                </section>
              </div>
              <div className="col-lg-3">
                <section className="resume-section skills-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                  <div className="resume-section-content">
                      <div className="resume-skill-item">
                        
                        <ul className="list-unstyled mb-4">
                          {this.skillProficiency()}
                        </ul>
                      </div>
                      <div className="resume-skill-item">
                          <h4 className="resume-skills-cat font-weight-bold">Others</h4>
                          <ul className="list-inline">
                            {this.otherSkills()}
                          </ul>
                      </div>
                  </div>
                </section>
                <section className="resume-section education-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      {this.educationDetails()}
                    </ul>
                  </div>
                </section>
                <section className="resume-section language-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled resume-lang-list">
                      {this.language()}
                    </ul>
                  </div>
                </section>
                <section className="resume-section interests-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      {this.interest()}
                    </ul>
                  </div>
                </section>
                
              </div>
            </div>
          </div>
          
          
        </div>
      </article> 
    );
  }
}

function Language(props){
  return(
    <li className="mb-2"><span className="resume-lang-name font-weight-bold">{props.val.name}</span> <small className="text-muted font-weight-normal">({props.val.proficient})</small></li>
  )
}

function OtherSkill(props){
  return(
    <li className="list-inline-item"><span className="badge badge-light">{props.val}</span></li>
  );
}

function SocialLink(props){
  
  return(
    <li className="mb-3">
      <a href={props.val.url}><span className="fa-container text-center mr-2">
        <i className={cn('fab', [`fa-${props.val.icon}`], 'fa-fw')}></i>
        </span>{props.val.name}
      </a>
    </li>
  );
  
}

function Interest(props){
  return(

    <li className="mb-1">{props.val}</li>

  );
}

export default App;
