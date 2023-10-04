import { forwardRef } from "react"

const Contact = forwardRef(({ contactRef }) => {
    return (
        <section className="text-center mb-52 " ref={contactRef}>
            <div className='sm:w-full text-center sm:mt-24 sm:p-6'>
                <h1 className='text-5xl'>contact me</h1>

                <div className=' lg:max-w-4xl h-96 mt-6 m-auto rounded-lg bg-ash justify-center sm:w-full md:w-full '>
                    <input type="text" placeholder="Name" className="w-11/12 p-4  my-4 rounded-lg " />
                    <input type="email" placeholder="Email" className="w-11/12 p-4  my-4  rounded-lg" />
                    <textarea placeholder="Message" className="w-11/12 h-72  my-4 p-2 text-white rounded-b-lg   bg-navyblue"></textarea>
                </div>
            </div>
            <button className="bg-white p-4 w-52 text-navyblue text-xl  m-auto">Send</button>
        </section>
    )
})
export default Contact