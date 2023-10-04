import { forwardRef, useEffect, useState } from 'react';
import { FaHamburger } from 'react-icons/fa';


const Aboutme = forwardRef(({ aboutmeRef }) => {
    const [displayedText, setDisplayedText] = useState('');
    const text = "I am a Software developer ,I am passionate about consistently advancing my knowledge and skills.I belong to Ibadan Techies club,i have also attended multiple seminars on coding.I am a Software developer ,i'm passionate about consistently advancing my knowledge and skills.I belong to Ibadan Techies club,i have also attended multiple seminars on coding.I am a Software developer ,i'm passionate about consistently advancing my knowledge and skills.I belong to Ibadan Techies club,i have also attended multiple seminars on coding.I am a Software developer ,i'm passionate about consistently advancing my knowledge and skills.I belong to Ibadan Techies club,i have also attended multiple seminars on coding."
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
        <div className='sm:m-0 ' ref={aboutmeRef}>
            <section className='xl:flex sm:mt-9   sm:m-0 md:justify-between m-0 sm:flex-wrap'>


                <div className='xl:w-1/4 flex sm:w-1/2 sm:m-auto  '>
                    <div className=' w-96 h-96 flex  rounded-full overflow-hidden  sm:flex '>
                        <img src='mypic.JPG' className=' h-[450px] w-[450px] object-cover'></img>
                    </div>
                </div>
                <div className='xl:w-1/2 sm:w-full sm:mt-9 sm:p-6 mr-24 '    >
                    <div className='h-96 border-4 p-5 rounded-3xl text-white bg-navyblue'>
                        <h1 className='text-5xl text-center mb-5'>About me</h1>
                        <p className='text-lg '>{displayedText}</p>
                        {/* <span className='cursor'>|</span> */}
                    </div>
                </div>
            </section>




        </div>
    )
})
export default Aboutme