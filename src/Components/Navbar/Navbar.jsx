import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import navLogo from "../../assets/images/nav-logo.png"

const Navbar = () => {

    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <div className='lg:mx-10 mx-2'>
            <nav className="flex items-center justify-between px-4  text-black mb-24">
                <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
                    <img className='lg:w-full w-36' src={navLogo} alt="logo" />
                </div>
                <ul className="hidden items-center justify-between gap-10 md:flex uppercase">
                    <li className="group flex  cursor-pointer flex-col">
                        Home<span className="h-[3px] w-[0px] rounded-full bg-[#583101]  transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group flex  cursor-pointer flex-col">
                        coffee<span className="h-[3px]  w-[0px] rounded-full bg-[#583101]  transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group flex  cursor-pointer flex-col">
                        menu<span className="h-[3px]  w-[0px] rounded-full bg-[#583101]  transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group flex  cursor-pointer flex-col">
                        gallery<span className="h-[3px]  w-[0px] rounded-full bg-[#583101]  transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group flex  cursor-pointer flex-col">
                        team<span className="h-[3px]  w-[0px] rounded-full bg-[#583101] transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="group flex cursor-pointer flex-col bg-[#E7BC91] text-black rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <path d="M22.8704 7.32548H20.4788C20.4788 3.97737 17.8482 1.34671 14.5001 1.34671C11.152 1.34671 8.5213 3.97737 8.5213 7.32548H6.12979C4.81446 7.32548 3.73828 8.40166 3.73828 9.71699V24.0661C3.73828 25.3814 4.81446 26.4576 6.12979 26.4576H22.8704C24.1857 26.4576 25.2619 25.3814 25.2619 24.0661V9.71699C25.2619 8.40166 24.1857 7.32548 22.8704 7.32548ZM14.5001 3.73822C16.5329 3.73822 18.0873 5.2927 18.0873 7.32548H10.9128C10.9128 5.2927 12.4673 3.73822 14.5001 3.73822ZM22.8704 24.0661H6.12979V9.71699H22.8704V24.0661ZM14.5001 14.5C12.4673 14.5 10.9128 12.9455 10.9128 10.9127H8.5213C8.5213 14.2609 11.152 16.8915 14.5001 16.8915C17.8482 16.8915 20.4788 14.2609 20.4788 10.9127H18.0873C18.0873 12.9455 16.5329 14.5 14.5001 14.5Z" fill="#583101" />
                        </svg>
                    </li>
                </ul>
                <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                    {dropDownState && (
                        <ul className=" z-10  gap-2  bg-[#E7BC91]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg uppercase text-base ">
                            <li className="cursor-pointer  px-6 py-2 text-black rounded-t-lg hover:bg-sky-600 ">
                                Home
                            </li>
                            <li className="cursor-pointer  px-6 py-2 text-black hover:bg-sky-600 ">
                                Coffee
                            </li>
                            <li className="cursor-pointer  px-6 py-2 text-black hover:bg-sky-600 ">
                                menu
                            </li>
                            <li className="cursor-pointer  px-6 py-2 text-black hover:bg-sky-600 ">
                                gallery
                            </li>
                            <li className="cursor-pointer  px-6 py-2 text-black hover:bg-sky-600 ">
                                team
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;


