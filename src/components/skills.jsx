import { faBootstrap, faCss3Alt, faGit, faHtml5, faJava, faJs, faNode, faNodeJs, faReact, faTeamspeak } from "@fortawesome/free-brands-svg-icons"
import { faAddressBook, faNavicon, faWind } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { forwardRef } from "react"
import { FaBootstrap, FaDatabase, FaJava, FaReact, FaSortNumericDown } from "react-icons/fa"
import { FiDatabase } from "react-icons/fi"

const Skills = forwardRef(({ skillsRef }) => {
    return (
        <section ref={skillsRef}>
            <div className='w-1/2 sm:w-full sm:mt-24 sm:p-6  bg-navyblue text-white '   >
                <h1 className='text-5xl text-center'>My skills</h1>
                <div className='flex lg:justify-between p-9 sm:flex-wrap  m-auto  w-3/4   sm:justify-center'>
                    <div className='w-56 h-56 border-4 md:mx-2 bg-white text-center  sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faHtml5} size="5x" className="mt-9" color="black" ></FontAwesomeIcon>
                        <h2 className="text-black text-2xl">HTML</h2>
                    </div>
                    <div className='w-56 h-56 border-4  bg-white text-center  sm:my-5  rounded-2xl'>
                        <FontAwesomeIcon icon={faBootstrap} size="5x" className="mt-9" color="#1f2937" ></FontAwesomeIcon>
                        <h2 className="text-black text-2xl">Bootstrap</h2>

                    </div>
                    <div className='w-56 h-56 border-4  md:mx-3  bg-white text-center sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faJs} size="5x" className="mt-9" color="#1f2937" ></FontAwesomeIcon>
                        <h2 className="text-black text-2xl">Javascript</h2>

                    </div>
                    <div className='w-56 h-56 bg-white text-center sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faReact} size="5x" className="mt-9" color="#1f2937" ></FontAwesomeIcon>
                        <h2 className="text-black text-2xl">React</h2>
                    </div>
                    <div className='w-56 h-56 md:mx-3  bg-white text-center  sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faNode} size="5x" className="mt-9" color="#1f2937" ></FontAwesomeIcon>
                        <h2 className="text-black text-2xl">Nodejs</h2>
                    </div>
                    <div className='w-56 h-56  bg-white  text-center sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faTeamspeak} size="5x" className="mt-9" color="#1f2937" ></FontAwesomeIcon>
                        <h2 className="text-black text-2xl">Tailwind</h2>
                    </div>
                    <div className='w-56 h-56  bg-white  text-center sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faGit} size="5x" className="mt-9" color="#1f2937" ></FontAwesomeIcon>
                        <h2 className="text-black text-2xl">Git</h2>
                    </div>
                    <div className='w-56 h-56   bg-white  text-center sm:my-5 rounded-2xl'>
                        <FaDatabase color="#1f2937" size="80" className="mt-9 mx-auto" />
                        <h2 className="text-black text-2xl">Mongodb</h2>
                    </div>
                    <div className='w-56 h-56   bg-white  text-center sm:my-5 rounded-2xl'>
                        <FaDatabase color="#1f2937" size="80" className="mt-9 mx-auto" />
                        <h2 className="text-black text-2xl">Express</h2>
                    </div>
                </div>
            </div>
        </section>
    )
})
export default Skills