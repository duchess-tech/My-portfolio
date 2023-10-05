import { faBootstrap, faCss3Alt, faGit, faHtml5, faJava, faJs, faNode, faNodeJs, faReact, faTeamspeak } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { forwardRef } from "react"
import { FaDatabase } from "react-icons/fa"
import { FiDatabase } from "react-icons/fi"

const Skills = forwardRef((props, ref) => {
    return (
        <section ref={ref.skillsRef}>
            <div className='2xl:w-1/2 w-full sm:w-full sm:mt-24 sm:p-2  bg-navyblue text-white  text-center ' >
                <h1 className='2xl:text-5xl text-3xl text-center '>My skills</h1>
                <div className='flex lg:justify-between sm:gap-6 2xl:p-9 p-3 gap-5 justify-center sm:flex-wrap sm:p-2 sm-full flex-wrap  m-auto 2xl:w-10/12 2xl:flex-start   sm:justify-center mb-12'>
                    <div className='2xl:w-56 sm:w-32  w-32 h-40 2xl:h-56 border-4 md:mx-2 bg-white text-center  sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faHtml5} size="5x" className="mt-9" color="black" ></FontAwesomeIcon>
                        <h2 className="text-black text-2xl">HTML</h2>
                    </div>
                    <div className='2xl:w-56 sm:w-32 w-32 h-40 2xl:h-56 border-4  bg-white text-center  sm:my-5  rounded-2xl'>
                        <FontAwesomeIcon icon={faBootstrap} size="5x" className="mt-9" color="#1f2937" ></FontAwesomeIcon>
                        <h2 className="text-black text-2xl">Bootstrap</h2>

                    </div>
                    <div className='2xl:w-56  2xl:h-56  w-32 h-40 sm:w-32 border-4  md:mx-3  bg-white text-center sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faJs} size="5x" className="mt-9" color="#1f2937" ></FontAwesomeIcon>
                        <h2 className="text-black text-2xl">Javascript</h2>

                    </div>
                    <div className='2xl:w-56 sm:w-32  w-32 h-40 2xl:h-56 bg-white text-center sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faReact} size="5x" className="mt-9" color="#1f2937" ></FontAwesomeIcon>
                        <h2 className="text-black text-2xl">React</h2>
                    </div>
                    <div className='2xl:w-56 sm:w-32 2xl:h-56  w-32 h-40 md:mx-3  bg-white text-center  sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faNode} size="5x" className="mt-9" color="#1f2937" ></FontAwesomeIcon>
                        <h2 className="text-black text-2xl">Nodejs</h2>
                    </div>
                    <div className='2xl:w-56 sm:w-32 2xl:h-56  w-32 h-40  bg-white  text-center sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faTeamspeak} size="5x" className="mt-9" color="#1f2937" ></FontAwesomeIcon>
                        <h2 className="text-black text-2xl">Tailwind</h2>
                    </div>
                    <div className='2xl:w-56 sm:w-32 2xl: h-56  w-32 h-40  bg-white  text-center sm:my-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faGit} size="5x" className="mt-9" color="#1f2937" ></FontAwesomeIcon>
                        <h2 className="text-black text-2xl">Git</h2>
                    </div>
                    <div className='2xl:w-56 sm:w-32 2xl:h-56  w-32 h-40  bg-white  text-center sm:my-5 rounded-2xl'>
                        <FaDatabase color="#1f2937" size="80" className="mt-9 mx-auto" />
                        <h2 className="text-black text-2xl">Mongodb</h2>
                    </div>
                    <div className='2xl:w-56 sm:w-32 2xl:h-56 w-32 h-40   bg-white  text-center sm:my-5 rounded-2xl'>
                        <FaDatabase color="#1f2937" size="80" className="mt-9 mx-auto" />
                        <h2 className="text-black text-2xl">Express</h2>
                    </div>
                </div>
            </div>
        </section>
    )
})
export default Skills