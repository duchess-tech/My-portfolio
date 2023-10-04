import { forwardRef } from "react"

const Myproject = forwardRef(({ myprojectRef }) => {
    return (
        <div className='w-1/2 sm:w-full sm:mt-24 sm:p-6' ref={myprojectRef}  >
            <h1 className='text-5xl text-center'>My project</h1>
            <div className=" flex justify-around">
                <div className="w-96 h-96 border overflow-hidden border rounded-xl ">
                    <img src="ecommerce.png" alt="Ecommerce-website-img" />
                </div>


                <div className="w-96 h-96 overflow-hidden  border rounded-xl">
                    <img src="tasktraker.jpg" alt="Tasktraker-img" />
                </div>
                <div className="w-96 h-96   border rounded-xl overflow-hidden">
                    <img src="blog.jpg" className="h-full" alt="Tasktraker-img" />
                </div>
            </div>

            {/* <div className="flex justify-center mt-9  mb-9 sm:flex-wrap">
                <div className='h-[400px] w-96 border-2 border-ash  sm:mb-3   overflow-hidden '>
                </div>
            </div>
            <div className="flex justify-center mb-9   sm:flex-wrap ">
                <div className='h-auto w-96  sm:mb-3 text-center  '>
                </div>
                <div className='h-44 w-1/2 border-2 ml-9  rounded-xl text-center border '>
                </div>
            </div>
            <div className="flex justify-center mb-9 sm:flex-wrap">
                <div className='h-auto w-96 sm:mb-3 '>
                    <img src="blog.jpg" alt="Tasktraker-img" />
                </div>
                <div className='h-44 w-1/2 border-2 ml-9 rounded-xl text-center border'>

                </div>
            </div>
            <div className="flex justify-center  sm:flex-wrap">
                <div className='h-44 w-96 border-2 rounded-xl text-center border sm:mb-3 '>
                    <h1 className='text-5xl text-center'>Calculator</h1>

                </div>
                <div className='h-44 w-1/2 border-2 rounded-xl ml-9 text-center border '>
                </div>
            </div> */}
        </div>
    )
})
export default Myproject