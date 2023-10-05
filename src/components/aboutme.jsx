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
        <div className='sm:m-0 m-4 ' ref={ref.aboutmeRef}>
            <section className=' sm:mt-9 
              sm:m-0 md:justify-between m-0 sm:flex-wrap  '>
                <div className='xl:w-64 2xl:w-64  sm:flex sm:w-1/2 sm:m-auto w-full flex justify-center   p-4 items-center '>
                    <div className=' 2xl:w-[400px] 2xl:h-[400px] flex justify-center mt-12 2xl:mt-0 xl:mt-0  mb-12 items-center 
                       rounded-full w-[300px] border-navyblue border-4 absolute overflow-hidden top-16 sm:top-32  h-[300px] 2xl:left-32 xl:left-40 2xl:top-44 xl:top-44 sm:flex  hover:animate-spin '>
                        <img src='mypic.JPG' className=' rounded-full 
                         object-fit'></img>
                    </div>
                </div>
                <div className='xl:w-9/12 xl:ml-72     2xl:w-2/3 sm:w-full sm:mt-54 sm:p-6 mr-24 w-full  mt-56 md:mt-60  mb-12 md:flex md:justify-center 2xl:mt-44 xl:mt-40 2xl:ml-96'     >
                    <div className='2xl:h-96 xl:h-96 2xl:w-full xl:w-full  h-[450px] md:w-4/6  border-4  p-3 sm:p-5 rounded-3xl text-white bg-navyblue  2xl:p-8 xl:p-8'>
                        <h1 className='text-5xl text-center mb-5 mt-12'>About me</h1>
                        <p className='2xl:text-lg text-sm xl:text-xl'>{displayedText}</p>
                        {/* <span className='cursor'>|</span> */}
                    </div>
                </div>
            </section>




        </div>
    )
})
export default Aboutme