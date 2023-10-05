import { forwardRef, useEffect, useState } from 'react';
import { FaHamburger } from 'react-icons/fa';


const Aboutme = forwardRef((props, ref) => {
    const [displayedText, setDisplayedText] = useState('');
    const text = "I am a Software developer , passionate about consistently advancing my knowledge and skills to craft intuitive and dynamic user interfaces.I belong to Ibadan Techies club,i have also attended multiple seminars on coding. My journey into tech world isn't only about writing lines of code, it's about creating meaningful solutions that have real impact. If you are curios about the projects ive worked on or looking for a collaborate on a new venture please fell free to explore my portfolio or reachout,i'm always eager to connect and discuss the limitless possibilities the tech world offers."
    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            setDisplayedText(text.slice(0, i));
            i++;

            if (i > text.length) {
                clearInterval(intervalId);
            }
        }, 10);

        return () => clearInterval(intervalId);
    }, [text]);



    return (
        <div className='sm:m-0 m-4' ref={ref.aboutmeRef}>
            <section className='xl:flex sm:mt-9   sm:m-0 md:justify-between m-0 sm:flex-wrap'>
                <div className='xl:w-1/4 sm:flex sm:w-1/2 sm:m-auto w-full  p-4 '>
                    <div className=' flex justify-center mt-12 mb-12 items-center 
                       rounded-full  sm:flex '>
                        <img src='mypic.JPG' className='w-[250px]  rounded-full 
                         h-[250px] object-cover absolute top-36 right-32  animate-custom-spin '></img>
                    </div>
                </div>
                <div className='xl:w-1/2 sm:w-full sm:mt-9 sm:p-6 mr-24 w-full mt-28  mb-12'    >
                    <div className='2xl:h-96 2xl:w-96  h-[450px]  border-4  p-3 sm:p-5 rounded-3xl text-white bg-navyblue '>
                        <h1 className='text-5xl text-center mb-5 mt-12'>About me</h1>
                        <p className='2xl:text-lg text-sm'>{displayedText}</p>
                        {/* <span className='cursor'>|</span> */}
                    </div>
                </div>
            </section>




        </div>
    )
})
export default Aboutme