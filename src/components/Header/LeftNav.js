import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function LeftNav() {
    return (
        <React.Fragment>
            <div className="w-full z-50">
                <div className="w-96 left-nav shadow-md z-50 bg-white absolute overflow-scroll">
                    <div className="pt-4 pb-2 px-6 bg-[#232f3e]">
                        <a href="#!">
                            <div className="flex items-center">
                                <div className="shrink-0">
                                    <AccountCircleIcon className="text-white text-lg rounded-full w-16" />
                                </div>
                                <div className="grow ml-3">
                                    <p className="text-lg text-white font-bold">Hello, Vikas</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <h2 className='relative font-bold text-lg py-4 px-6'>Trending</h2>
                    <ul className="relative border-b">
                        <li className="relative">
                            <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">New Releases</a>
                        </li>
                        <li className="relative">
                            <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">New Releases</a>
                        </li>
                        <li className="relative">
                            <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Movers and Shakers</a>
                        </li>
                    </ul>
                    <h2 className='relative font-bold text-lg py-4 px-6'>Digital Content And Devices</h2>
                    <ul className="relative border-b">
                        <li className="relative apply-left-link">
                            <a className="w-11/12" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Echo & Alexa </a>
                            <NavigateNextIcon className="w-1/12" />
                        </li>
                        <li className="relative apply-left-link">
                            <a className="w-11/12" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Fire TV </a>
                            <NavigateNextIcon className="w-1/12" />
                        </li>
                        <li className="relative apply-left-link">
                            <a className="w-11/12" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Kindle E-Readers & eBooks</a>
                            <NavigateNextIcon className="w-1/12" />
                        </li>

                        <li className="relative apply-left-link">
                            <a className="w-11/12" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Audible Audiobooks</a>
                            <NavigateNextIcon className="w-1/12" />
                        </li>
                        <li className="relative apply-left-link">
                            <a className="w-11/12" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Amazon Prime Video</a>
                            <NavigateNextIcon className="w-1/12" />
                        </li>
                        <li className="relative apply-left-link">
                            <a className="w-11/12" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Amazon Prime Music</a>
                            <NavigateNextIcon className="w-1/12" />
                        </li>

                    </ul>
                    <h2 className='relative font-bold text-lg py-4 px-6'>Shop By Department</h2>
                    <ul className="relative border-b">
                        <li className="relative apply-left-link">
                            <a className="w-11/12" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Mobiles, Computers</a>
                            <NavigateNextIcon className="w-1/12" />
                        </li>
                        <li className="relative apply-left-link">
                            <a className="w-11/12" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">TV, Appliances, Electronics</a>
                            <NavigateNextIcon className="w-1/12" />
                        </li>
                        <li className="relative apply-left-link">
                            <a className="w-11/12" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Men's Fashion</a>
                            <NavigateNextIcon className="w-1/12" />
                        </li>

                        <li className="relative apply-left-link">
                            <a className="w-11/12" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Women's Fashion</a>
                            <NavigateNextIcon className="w-1/12" />
                        </li>
                        
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LeftNav