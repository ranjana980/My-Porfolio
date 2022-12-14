
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import WorkIcon from '@material-ui/icons/Work';
import LinearProgress from '@material-ui/core/LinearProgress'
import emmoji from '../emmoji.png'
import doctor from '../DoctorWebApp.png'
import recipe from '../recipe.png'
import figma from '../figma-design.png'
import github from '../github-finder.png'
import pokemon from '../Pokemon.png'
export default function MyPortFolio() {
    return (
        <div className="Portfolio ">
            <div className="Main-div">
                <h1 className='text-center my-resume' >My Resume</h1>
                <div className='d-flex row'>
                    <div className='col-md-6 col-sm-12 ml-4  mt-5' >
                        <h5 className='Year1'>2010 - 2012</h5>
                        <div className='d-flex'>
                            <div>
                                <CastForEducationIcon style={{ fontSize: '30px', marginRight: '10px', marginTop: '7px' }} />
                                <div className='line'></div>
                            </div>
                            <div style={{ textAlign: 'start' }}>
                                <div className='d-flex'><h4 style={{ color: 'rgb(0, 123, 255)', textShadow: '1px 1px 1px #000000' }}>Board of HighSchool and Intermediat Educational</h4></div>
                                <div style={{ color: 'white' }}>
                                    I have Completed My HighSchool From
                                    Board of HighSchool and Intermediat
                                    Educational with Hindi,English,Arts,Home
                                    Science,History and Economics Subject with 72% Marks.
                                </div>

                            </div>
                        </div>
                        <h5 className='Year1'>2012 - 2014</h5>
                        <div className='d-flex'>
                            <div>
                                <CastForEducationIcon style={{ fontSize: '30px', marginRight: '10px', marginTop: '7px' }} />
                                <div className='line'></div>
                            </div>
                            <div style={{ textAlign: 'start' }}>
                                <div className='d-flex'><h4 style={{ color: 'rgb(0, 123, 255)', textShadow: '1px 1px 1px #000000' }}>Board of HighSchool and Intermediat Educational</h4></div>
                                <div style={{ color: 'white' }}>
                                    I have Completed My Intermediat From
                                    Board of HighSchool and Intermediat
                                    Educational with Hindi,English,Arts,Home
                                    Science and Economics Subject with 66% Marks.
                                </div>
                            </div>
                        </div>
                        <h5 className='Year1'>2015 - 2017</h5>
                        <div className='d-flex'>
                           <div>
                           <CastForEducationIcon style={{ fontSize: '30px', marginRight: '10px', marginTop: '7px' }} />
                            <div className='line'></div>
                           </div>
                            <div style={{ textAlign: 'start' }}>
                                <div className='d-flex'><h4 style={{ color: 'rgb(0, 123, 255)', textShadow: '1px 1px 1px #000000' }}>Deen Dayal Upadhyay University of Gorkhpur</h4></div>
                                <div style={{ color: 'white' }}>
                                    I have Completed My Bachelor's Degree
                                    From Deen Dayal Upadhyay University of
                                    Gorkhpur with Hindi,English and Home Science
                                    Subject with 53% Marks.
                                </div>
                            </div>
                        </div>
                        <h5 className='Year1'>2020 - 2021</h5>
                        <div className='d-flex'>
                            <div>
                                <CastForEducationIcon style={{ fontSize: '30px', marginRight: '10px', marginTop: '7px' }} />
                                <div className='line'></div>
                            </div>
                            <div style={{ textAlign: 'start' }}>
                                <div className='d-flex'><h4 style={{ color: 'rgb(0, 123, 255)', textShadow: '1px 1px 1px #000000' }}>Navgurukul</h4></div>
                                <div style={{ color: 'white' }}>
                                    I have Completed 1 Year Residential
                                    Software Engineering program From Navgurukul.
                                    Navgurukul is a non-profit orgnization which
                                    provides scholership Students for thier study for taking
                                    job in Good IT Companies.I learnt Python,html,css,
                                    JavaScript and Reactjs in Navgurukul Pune Campus
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 col-sm-12 ml-4 Exp-div' >
                        <h5 className='Year1'>2021 - 2022</h5>
                        <div className='d-flex'>
                            <div>
                                <WorkIcon style={{ fontSize: '30px', marginRight: '10px', marginTop: '7px' }} />
                                <div className='line'></div>
                            </div>
                            <div style={{ textAlign: 'start' }}>
                                <div className='d-flex'><h4 style={{ color: 'rgb(0, 123, 255)', textShadow: '1px 1px 1px #000000' }}>XpressCure Technology</h4></div>
                                <div style={{ color: 'white' }}>
                                    I have experience in building
                                    websites and applications
                                    using the latest technologies.
                                    I have worked on projects using
                                    HTML, CSS, JavaScript, React,
                                    Redux, Next.js,Bootstrap,Material
                                    Ui,socket.io.I Created A Doctor Web App
                                    from Starting and added login,signup,
                                    Registration,Chat,Video Call
                                    and Prescription,Doctor
                                    can create his Account can
                                    Registration and login his Account For his Data.
                                    and Doctor can chat Video call and send Prescription
                                    for Patient using Mobile phone and web applications.
                                    this web Aplication is Mobile Responsive also.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pre-div ml-sm-5 ml-4'>
                    <div className='row'>
                        <div className='col-md-4  col-sm-5 col-sx-3 '>
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }}><h6>Python</h6><h6>70%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                        <div className='col-md-4  col-sm-5 col-xs-3'>
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }}><h6>JavaScript</h6><h6>70%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                        <div className='col-md-4  col-sm-5 col-xs-3' >
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }}><h6>Html && Css</h6><h6>70%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-md-4  col-sm-5 col-xs-3'>
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }}><h6>Material Ui</h6><h6>70%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                        <div className='col-md-4  col-sm-5 col-xs-3'>
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }}><h6>Bootstrap</h6><h6>70%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                        <div className='col-md-4  col-sm-5' >
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }}><h6>React</h6><h6>80%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-md-4  col-sm-5 col-xs-3'>
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }}><h6>Redux</h6><h6>60%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                        <div className='col-md-4  col-sm-5 col-xs-3'>
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }}><h6>Next Js</h6><h6>80%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                        <div className='col-md-4  col-sm-5 col-xs-3' >
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }}><h6>Agora Web Rtc</h6><h6>70%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4  col-sm-5 col-xs-3'>
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }}><h6>Express js</h6><h6>40%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                        <div className='col-md-4  col-sm-5 col-sx-3'>
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }}><h6>Mongodb Database</h6><h6>50%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                        <div className='col-md-4  col-sm-5 col-xs-3' >
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }}><h6>Node js</h6><h6>50%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-md-4  col-sm-5 col-xs-3'>
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }} ><h6>socket.io</h6><h6>50%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                        <div className='col-md-4  col-sm-5 col-xs-3'>
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }}><h6>Firebase</h6><h6>60%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                        <div className='col-md-4  col-sm-5 col-xs-3' >
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }} ><h6>Github</h6><h6>70%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-md-4  col-sm-5 col-xs-3'>
                            <div className='d-flex' style={{ justifyContent: 'space-between', color: 'white' }} ><h6>Canvas</h6><h6>70%</h6></div>
                            <LinearProgress variant="determinate" color="secondary" value={70} />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='mt-3 text-center' style={{ color: 'rgb(0, 123, 255)', textShadow: '2px 2px 4px  #000000', }}>Projects</h1>
                    <div className='row mt-4 ml-sm-1 '>
                        <div className='col-md-3 col-sm-2  br bg-white ml-4 mr-sm-5 p-2 col-xs-2'>
                            <div className='hover-div'>
                                <img className='br live-preview' src={github} />
                                <div class="overlay">
                                </div>
                                <div class="text"><a target='_blank' href='https://git-finder-gray.vercel.app/'>Live Preview</a></div>
                            </div>
                            <h5 style={{ color: 'black', textShadow: '1px 1px 1px' }}>GitHub Finder</h5>
                        </div>
                        <div className='col-md-3 col-sm-3  br bg-white ml-4 mr-sm-3 p-2 col-xs-3'>
                            <div className='hover-div'>
                                <img className='br live-preview' src={recipe} />
                                <div class="overlay">
                                </div>
                                <div class="text"><a target='_blank' href='https://react-food-recipe-finder.vercel.app/'>Live Preview</a></div>
                            </div>
                            <h5 style={{ color: 'black', textShadow: '1px 1px 1px' }}>Food Recipe Finder</h5>
                        </div>
                        <div className='col-md-3 col-sm-2  br bg-white ml-4 mr-sm-5 p-2 col-xs-2'>
                            <div className='hover-div'>
                                <img className='br live-preview' src={figma} />
                                <div class="overlay">
                                </div>
                                <div class="text"><a target='_blank' href='https://figma-design-l4vx.vercel.app/'>Live Preview</a></div>
                            </div>
                            <h5 style={{ color: 'black', textShadow: '1px 1px 1px' }}>Figma Design</h5>
                        </div>
                       
                    </div>
                    <div className='row mt-4 ml-sm-1 '>
                        <div className='col-md-3 col-sm-2  br bg-white ml-4 mr-sm-5 p-2 col-xs-2'>
                            <div className='hover-div'>
                                <img className='br live-preview' src={pokemon} />
                                <div class="overlay">
                                </div>
                                <div class="text"><a target='_blank' href='https://pokemon-git-master-ranjana980.vercel.app/'>Live Preview</a></div>
                            </div>
                            <h5 style={{ color: 'black', textShadow: '1px 1px 1px' }}>Pokemon</h5>
                        </div>
                        <div className='col-md-3 col-sm-2  br bg-white ml-4 mr-sm-5 p-2 col-xs-2'>
                            <div className='hover-div'>
                                <img className='br live-preview' src={emmoji} />
                                <div class="overlay">
                                </div>
                                <div class="text"><a target='_blank' href='https://emoji-search-beta.vercel.app/'>Live Preview</a></div>
                            </div>
                            <h5 style={{ color: 'black', textShadow: '1px 1px 1px' }}>Emmoji Search</h5>
                        </div>
                        {/* <div className='col-md-3 col-sm-3  br bg-white ml-4 mr-sm-3 p-2 col-xs-3'>
                            <div className='hover-div'>
                                <img className='br live-preview' src={recipe} />
                                <div class="overlay">
                                </div>
                                <div class="text"><a target='_blank' href='https://react-food-recipe-finder.vercel.app/'>Live Preview</a></div>
                            </div>
                            <h5 style={{ color: 'black', textShadow: '1px 1px 1px' }}>Food Recipe Finder</h5>
                        </div>
                        <div className='col-md-3 col-sm-2  br bg-white ml-4 mr-sm-5 p-2 col-xs-2'>
                            <div className='hover-div'>
                                <img className='br live-preview' src={figma} />
                                <div class="overlay">
                                </div>
                                <div class="text"><a target='_blank' href='https://figma-design-l4vx.vercel.app/'>Live Preview</a></div>
                            </div>
                            <h5 style={{ color: 'black', textShadow: '1px 1px 1px' }}>Figma Design</h5>
                        </div> */}
                        <div className='col-md-3 col-sm-2  br bg-white  mr-sm-5 p-2 col-xs-2'>
                            <div className='hover-div'>
                                <img className='br live-preview' src={doctor} />
                                <div class="overlay">
                                </div>
                                <div class="text"><a target='_blank' href='doctor.xpresscure.com'>Live Preview</a></div>
                            </div>
                            <h5 style={{ color: 'black', textShadow: '1px 1px 1px' }}>Doctor Web App</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}