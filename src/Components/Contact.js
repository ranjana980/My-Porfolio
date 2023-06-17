import Footer from './Footer';
import { TextField, TextareaAutosize } from '@material-ui/core'
import { LinkedIn, GitHub, Instagram, Facebook, Twitter, ArrowForward } from '@material-ui/icons';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import { Mailer } from 'nodemailer-react'

export default function Contact() {
    // const transport = {
    //     secure: true,
    //     service: "gmail",
    //     auth: {
    //         user: "khusheemathur18@gmail.com",
    //         pass: "csgnumadwbgfvcxk"
    //     }
    // }
    // const defaults = {
    //     from: "ranjana20@navgurukul.org",
    // }
    // const WelcomeEmail = ({ firstName }) => ({
    //     subject: `👋 ${firstName}`,
    //     body: (
    //         <div>
    //             <p>Hello {firstName}!</p>
    //             <p>Hope you'll enjoy the package!</p>
    //         </div>
    //     )
    // })
    // const handleSendMail = () => {
    //     mailer.send('WelcomeEmail', { firstName: 'Mathieu' }, {
    //         to: 'ranjana20@navgurukul.org'
    //     })
    // }
    // const mailer = Mailer(
    //     { transport, defaults },
    //     { WelcomeEmail,  }
    // )

    return (
        <div>
            <div className="Contact">
                <div className="row p-md-5 p-sm-5 ml-5" >
                    <div className="col-md-4 col-sm-12 p-4  bg-[#ECF0F3] w-[300px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.20)] rounded-[10px]">
                        <img src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png" />
                        <h1
                            className="text-[20px] mt-4 font-bold mb-3"
                        >
                            Contact Details
                        </h1>
                        <div style={{ textAlign: 'start' }}>
                            If you have any suggestion, project or
                            even you want to say
                            <br />“hello”, please fill out
                            the form below and I will reply you <br />shortly.
                        </div>
                        <h3 className='mt-3 text-start'>Phone: +916307108245</h3>
                        <h6 className='mt-1 text-start'>Email: ranjana20@navgurukul.org</h6>
                        <div className='grid grid-cols-5 w-[300px] gap-1 mt-8 '>
                            <div className='bg-[#f6f6f6] hover:scale-110 hover:text-[white] hover:bg-blue-500 hh-[45px] w-[40px] p-2   rounded-md bg-[#ECF0F3]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] '>
                                <a className='hover:text-white hover:scale-120' href='https://www.linkedin.com/in/ranjana-chaudhary-2bb393211/' target='_blank'>
                                    <LinkedIn />
                                </a>
                            </div>
                            <div className=' h-[45px] w-[40px] hover:scale-110 hover:text-[white] hover:bg-blue-500  p-2 rounded-md bg-[#ECF0F3]  bg-[#f6f6f6] drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] '>
                                <a className='hover:text-white' href='https://github.com/ranjana980' target="_blank"><GitHub /></a>
                            </div>
                            <div className='bg-[#f6f6f6] hh-[45px] hover:scale-110 hover:text-[white] hover:bg-blue-500  w-[40px] p-2 rounded-md bg-[#ECF0F3]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] '>
                                <a className='hover:text-white hover:scale-120'
                                    href="https://twitter.com/RanjanaChoudary?t=A7OancGyt0WnrZBOVxrG_w&s=09"
                                    target="_blank"
                                >
                                    <Twitter />
                                </a>
                            </div>
                            <div className='bg-[#f6f6f6] hh-[45px] hover:scale-110 hover:text-[white] hover:bg-blue-500  w-[40px] p-2 rounded-md bg-[#ECF0F3]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] '>
                                <a className='hover:text-white hover:scale-120' href="https://www.instagram.com/ranjanachaudhary_123/" target="_blank"><Instagram /></a>
                            </div>
                            <div className='bg-[#f6f6f6] hh-[45px] hover:scale-110 hover:text-[white] hover:bg-blue-500  w-[40px] p-2 rounded-md bg-[#ECF0F3]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] '>
                                <a className='hover:text-white hover:scale-120' href="https://www.facebook.com/Ranjana24081996?mibextid=ZbWKwL" target="_blank"><Facebook /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 ml-36 p-4  bg-[#ECF0F3] w-[300px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.20)] rounded-[10px]">
                        <div className="flex justify-content-between">
                            <div >
                                <label>Your Name</label>
                                <div> <input className='border-solid w-[321px] rounded-[4px] p-2 border-[1px] border-gray-300 ' /></div>
                            </div>
                            <div >
                                <label>Phone Number</label>
                                <div> <input className='border-solid w-[321px] rounded-[4px] p-2 border-[1px] border-gray-300 ' /></div>
                            </div>
                           
                        </div>
                        <div className="flex justify-content-between mt-3">
                            <div >
                                <label>Email</label>
                                <div> <input className='border-solid w-[655px] rounded-[4px] p-2 border-[1px] border-gray-300 ' /></div>
                            </div>
                        </div>
                        <div className="flex justify-content-between mt-3">
                            <div >
                                <label>Subject</label>
                                <div> <input className='border-solid w-[655px] rounded-[4px] p-2 border-[1px] border-gray-300 ' /></div>
                            </div>
                        </div>
                        <div className="flex justify-content-between mt-3">
                            <div >
                                <label>Your Message</label>
                                <div> <textarea rows={6}  className='border-solid w-[655px] rounded-[4px] p-2 border-[1px] border-gray-300 ' /></div>
                            </div>
                        </div>
                        <button className='bg-[#ECF0F3] w-100 drop-shadow-[0_10px_10px_rgba(0,0,0,0.20)] w-[200px] p-2 mt-3 rounded-[4px] hover:bg-blue-500 hover:text-white hover:scale-15'>Send Message <ArrowForward/></button>
                    </div>
                </div>
                <Footer />
            </div>

        </div>


    )
}