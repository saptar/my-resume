import React, {Component} from 'react';
import cn from 'classnames';
import data from './data.json'
import './App.css';

class App extends Component {
  displaySocialLinks = () =>{
    let linkArr = [];
    data.social.map((item, i)=>linkArr.push(<SocialLink key={i} val={item}/>));
    return linkArr;

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
                <p className="mb-0">Summarise your career here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can download this free resume/CV template here. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget.</p>
              </div>
            </section>
            <div className="row">
              <div className="col-lg-9">
                <section className="resume-section experience-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
                  <div className="resume-section-content">
                    <div className="resume-timeline position-relative">
                      <article className="resume-timeline-item position-relative pb-5">
                        
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                              <h3 className="resume-position-title font-weight-bold mb-1">Lead Developer</h3>
                              <div className="resume-company-name ml-auto">Startup Hub</div>
                          </div>
                          <div className="resume-position-time">2018 - Present</div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                          <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                          <ul>
                            <li>Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.</li>
                            <li>At vero eos et accusamus et iusto odio dignissimos.</li>
                            <li>Blanditiis praesentium voluptatum deleniti atque corrupti.</li>
                            <li>Maecenas tempus tellus eget.</li>
                          </ul>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">Angular</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">Python</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">jQuery</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">Webpack</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">HTML/SASS</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">PostgresSQL</span></li>
                          </ul>
                        </div>

                      </article>
                      
                      <article className="resume-timeline-item position-relative pb-5">
                        
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                              <h3 className="resume-position-title font-weight-bold mb-1">Senior Software Developer</h3>
                              <div className="resume-company-name ml-auto">Google</div>
                          </div>
                          <div className="resume-position-time">2014 - 2018</div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements</h4>
                          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">React</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">Redux</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">Django</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">Webpack</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">HTML/SASS</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">MySQL</span></li>
                          </ul>
                        </div>

                      </article>
                      
                      <article className="resume-timeline-item position-relative pb-5">
                        
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                              <h3 className="resume-position-title font-weight-bold mb-1">Co-Founder & Lead Developer</h3>
                              <div className="resume-company-name ml-auto">To-do Lists</div>
                          </div>
                          <div className="resume-position-time">2012 - 2014</div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">Django</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">JavaScript</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">Node.js</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">Require.js</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">HTML/SASS</span></li>
                          </ul>
                        </div>

                      </article>
                      
                      <article className="resume-timeline-item position-relative">
                        
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                              <h3 className="resume-position-title font-weight-bold mb-1">Web Developer <small className="text-muted">(Intern)</small></h3>
                              <div className="resume-company-name ml-auto">Amazon</div>
                          </div>
                          <div className="resume-position-time">2011 - 2012</div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum.</p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">Ruby on Rails</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">jQuery</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">HTML/LESS</span></li>
                            <li className="list-inline-item"><span className="badge badge-primary badge-pill">MongoDB</span></li>
                          </ul>
                        </div>

                      </article>
                      
                      
                    </div>
                    
                    
                    
                    
                    
                    
                  </div>
                </section>
              </div>
              <div className="col-lg-3">
                <section className="resume-section skills-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                  <div className="resume-section-content">
                      <div className="resume-skill-item">
                        <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2">
                              <div className="resume-skill-name">Angular</div>
                            <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: 98+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                          </li>
                          <li className="mb-2">
                              <div className="resume-skill-name">React</div>
                            <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: 94+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                          </li>
                          <li className="mb-2">
                              <div className="resume-skill-name">JavaScript</div>
                            <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: 96+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                          </li>
                          
                          <li className="mb-2">
                              <div className="resume-skill-name">Node.js</div>
                            <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: 92+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                          </li>
                          <li className="mb-2">
                              <div className="resume-skill-name">HTML/CSS/SASS/LESS</div>
                            <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: 96+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="resume-skill-item">
                          <h4 className="resume-skills-cat font-weight-bold">Backend</h4>
                        <ul className="list-unstyled">
                          <li className="mb-2">
                              <div className="resume-skill-name">Python/Django</div>
                            <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: 95+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                          </li>
                          <li className="mb-2">
                              <div className="resume-skill-name">Ruby/Rails</div>
                            <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: 92+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                          </li>
                          <li className="mb-2">
                              <div className="resume-skill-name">PHP</div>
                            <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: 86+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                          </li>
                          <li className="mb-2">
                              <div className="resume-skill-name">WordPress/Shopify</div>
                            <div className="progress resume-progress">
                            <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: 82+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="resume-skill-item">
                          <h4 className="resume-skills-cat font-weight-bold">Others</h4>
                          <ul className="list-inline">
                            <li className="list-inline-item"><span className="badge badge-light">DevOps</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">Code Review</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">Git</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">Unit Testing</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">Wireframing</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">Sketch</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">Balsamiq</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">WordPress</span></li>
                            <li className="list-inline-item"><span className="badge badge-light">Shopify</span></li>
                          </ul>
                      </div>
                  </div>
                </section>
                <section className="resume-section education-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                          <div className="resume-degree font-weight-bold">MSc in Computer Science</div>
                          <div className="resume-degree-org">University College London</div>
                          <div className="resume-degree-time">2010 - 2011</div>
                      </li>
                      <li>
                          <div className="resume-degree font-weight-bold">BSc Maths and Physics</div>
                          <div className="resume-degree-org">Imperial College London</div>
                          <div className="resume-degree-time">2007 - 2010</div>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="resume-section reference-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Awards</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled resume-awards-list">
                      <li className="mb-2 pl-4 position-relative">
                          <i className="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                          <div className="resume-award-name">Award Name Lorem</div>
                          <div className="resume-award-desc">Award desc goes here, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</div>
                      </li>
                      <li className="mb-0 pl-4 position-relative">
                          <i className="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                          <div className="resume-award-name">Award Name Ipsum</div>
                          <div className="resume-award-desc">Award desc goes here, ultricies nec, pellentesque.</div>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="resume-section language-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled resume-lang-list">
                      <li className="mb-2"><span className="resume-lang-name font-weight-bold">English</span> <small className="text-muted font-weight-normal">(Native)</small></li>
                      <li className="mb-2 align-middle"><span className="resume-lang-name font-weight-bold">French</span> <small className="text-muted font-weight-normal">(Professional)</small></li>
                      <li><span className="resume-lang-name font-weight-bold">Spanish</span> <small className="text-muted font-weight-normal">(Professional)</small></li>
                    </ul>
                  </div>
                </section>
                <section className="resume-section interests-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-1">Climbing</li>
                      <li className="mb-1">Snowboarding</li>
                      <li className="mb-1">Cooking</li>
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

export default App;
