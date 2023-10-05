import axios from "axios";
import { forwardRef, useRef, useState } from "react"
import httpAuth from "../utils/http";

const Contact = forwardRef((props, ref) => {

    const n = useRef(null);
    const eref = useRef(null);
    const m = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            name: n.current.value,
            email: eref.current.value,
            message: m.current.value
        }
        try {
            console.log("again");
            const response = await axios.post('http://localhost:6000/emails/portfolioEmail', user);
            console.log("again");

            const data = await response.json();
            console.log(data);
        }
        catch (err) {
            console.log(err)
        }
    }

    // // e.preventDefault();
    // try {
    //     console.log("response")
    //     const response = await httpAuth.post('http://localhost:6000/emails/portfolioEmail', { name, email, message });
    //     console.log(response.data)
    // } catch (error) {
    //     console.error(error);
    // }
    // }







    return (
        <section className="text-center 2xl:mb-52  mb-24" ref={ref.contactRef}>
            <div className='sm:w-full w-full text-center sm:mt-24 sm:p-6 p-3 mt-2'>
                <h1 className='2xl:text-5xl text-3xl'>contact me</h1>
                <div className=' lg:max-w-4xl h-96 mt-4 m-auto rounded-lg bg-ash justify-center sm:w-full md:w-full '>
                    <input type="text" placeholder="Name" className="w-11/12 p-4  my-4 rounded-lg " ref={n} />
                    <input type="email" placeholder="Email" className="w-11/12 p-4  my-4  rounded-lg" ref={eref} />
                    <textarea placeholder="Message" className="w-11/12 h-72  my-4 p-2 text-white rounded-b-lg   bg-navyblue" ref={m}></textarea>
                </div>
            </div>
            <button className="bg-white p-4 w-52 text-navyblue text-xl  m-auto" onClick={handleSubmit}>Send</button>
        </section>
    )
})
export default Contact