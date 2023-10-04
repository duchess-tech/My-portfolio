import React, { useState } from "react";
import { RxHamburgerMenu } from 'react-icons/rx';

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-between px-4 py-3 md:px-10 lg:hidden ">


            <button
                type="button"
                className="block text-white  md:hidden transition transform delay-100 "
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen && <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path
                        d="M19.293 4.293a1 1 0 0 0-1.414 0L12 10.586 5.707 4.293a1 1 0 1 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                </svg>}
                {!isOpen && <div className='sm:block lg:hidden'>
                    <RxHamburgerMenu color='white' size={20} />
                </div>}
            </button>

            <nav className={`md:flex ${isOpen ? "block" : "hidden"} space-x-8 lg:hidden`}>
                <a href="/" className=" text-white">
                    About me
                </a>
                <a href="/about" className="">
                    My skills
                </a>
                <a href="/contact" className="">
                    My projects
                </a>
                <a href="/contact" className="">
                    Contact me
                </a>
            </nav>
        </div>
    );
}

export default HamburgerMenu;
