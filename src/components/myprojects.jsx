import { forwardRef } from "react"

const Myproject = forwardRef((props, ref) => {
    return (
        <div className='2xl:w-1/2 sm:w-full full sm:mt-24 sm:p-6' ref={ref.myprojectRef}  >
            <h1 className='2xl:text-5xl text-3xl text-center sm:mb-12 mb-8'>My project</h1>
            <div className=" flex flex-wrap sm:flex-wrap sm:gap-8 gap-8 justify-around">

                <div className="2xl:w-96 2xl:h-96 w-72 h-[350px] border overflow-hidden border rounded-xl hover:animate-pulse">
                    <img src="ecommerce.png" alt="Ecommerce-website-img" />
                </div>

                <div className="2xl:w-96 h-96 w-72 h-[350px] overflow-hidden  border hover:animate-pulse rounded-xl">
                    <img src="tasktraker.jpg" alt="Tasktraker-img" />
                </div>

                <div className="2xl:w-96 h-96 w-72 h-[350px]   border rounded-xl hover:animate-pulse overflow-hidden">
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