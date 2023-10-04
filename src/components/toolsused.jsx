import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FacebookIcon, FacebookShareButton, FacebookShareCount, InstapaperIcon, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share"

function Tools() {
    return (
        <div className=' sm:w-full sm:mt-24 ' >
            <div className="flex w-8/12 m-auto justify-center flex-wrap mt-5 gap-4 ">


                <FacebookShareButton url="https://web.facebook.com/esther.odedoyin" >
                    <FacebookIcon className="h-14 w-14 rounded-full  bg-navyblue" />
                </FacebookShareButton>

                <TwitterShareButton url="https://twitter.com/EstherOdedoyin">
                    <TwitterIcon className="h-14 w-14 rounded-full  bg-navyblue" />
                </TwitterShareButton>

                <LinkedinShareButton url="https://www.linkedin.com/in/estherodedoyin1/">
                    <LinkedinIcon className="h-14 w-14 rounded-full  bg-navyblue" />
                </LinkedinShareButton>

                <WhatsappShareButton url="https://alvo.chat/13hk">
                    <WhatsappIcon className="h-14 w-14 rounded-full  bg-navyblue" iconFillColor="navyblue" bgStyle={{ fil: "navyblue" }} />
                </WhatsappShareButton>
                {/* 
                <div className='h-14 w-14 rounded-full  bg-navyblue  mb-6 mx-3 flex justify-center items-center '>
                    <FontAwesomeIcon icon={faFacebookF} color="white" size="2x" />
                </div>
                <div className='h-14 w-14 rounded-full bg-navyblue mb-6 mx-3 text-center flex justify-center items-center '>
                    <FontAwesomeIcon icon={faTwitter} color="white" size="2x" />
                </div>
                <div className='h-14 w-14 rounded-full bg-navyblue mb-6 mx-3 text-center flex justify-center items-center  '>
                    <FontAwesomeIcon icon={faLinkedinIn} color="white" size="2x" />
                </div>
                <div className='h-14 w-14 rounded-full bg-navyblue  mb-6 mx-3 mx-3 text-center flex justify-center items-center     11 '>
                    <FontAwesomeIcon icon={faInstagram} color="white" size="2x" />

                </div>

*/}

            </div>
        </div>
    )
}
export default Tools