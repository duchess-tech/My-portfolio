import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedinIn, faThinkPeaks, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faComputer, faEnvelope, faLocation, faLocationCrosshairs, faLocationDot, faLocationPin, faLocationPinLock, faMicrophone, faMicrophoneSlash, faMobile, faMobileAlt, faMobileAndroid, faMobileButton, faNoteSticky, faPen, faPeopleGroup, faPhone, faRestroom, faTasksAlt, faTeeth, faTeethOpen } from '@fortawesome/free-solid-svg-icons'
import { EmailShareButton } from 'react-share'
import Mailbtn from '../utils/mailbtn'

function Footer() {




    return (

        <div className='lg:flex sm:p-6 bg-ash lg:items-center justify-around sm:text-center sm:column-reverse'>
            <div className="lg:w-72 sm:w-full my-9 ">
                <h1><FontAwesomeIcon icon={faLocationDot} color="rgb(31,41,55)" size="2x"></FontAwesomeIcon></h1>
                <p>Address</p>
                <p>No 16,Aho Agbeja estate,Ajibode UI Ibadan,Oyo State. </p>

            </div>
            <div className=" lg:w-72  sm:w-full  my-9">
                <h1><FontAwesomeIcon icon={faMobileAlt} color="rgb(31,41,55)" size="2x"></FontAwesomeIcon></h1>

                <p >
                    Phone-number
                </p>
                <p>08138750529</p> </div>
            <div className="lg:w-72  sm:w-full">
                <Mailbtn mailto="mailto:Estherodedoyin1@gmail.com">

                </Mailbtn>
                <p>Email Address</p>
                <p>Estherodedoyin1@gmail.com</p>
            </div>
        </div>
    )
}
export default Footer