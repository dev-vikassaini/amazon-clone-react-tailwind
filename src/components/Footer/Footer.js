import React from 'react'
import './Footer.css';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Footer() {
    return (
        <React.Fragment>
            <div className="footer w-full flex flex-col mt-10">
                <div className="bg-[#485769] text-white flex flex-row justify-center pt-3 pb-3">
                    <p className="text-center cursor-pointer">Back to top</p>
                </div>

                <div className="bg-[#232f3e] text-white flex flex-row justify-center border-b border-gray-600">
                    <div className='w-5/6 flex flex-row p-12'>
                        <div className='flex flex-col space-y-2 justify-start w-1/3'>
                            <h1>Get to Know Us</h1>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">About Us</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Careers</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Press Releases</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Amazon Cares</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Gift a Smile</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Amazon Science</a>
                        </div>
                        <div className='flex flex-col space-y-2 justify-start w-1/3'>
                            <h1>Connect with Us</h1>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Facebook</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Twitter</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Instagram</a>
                        </div>
                        <div className='flex flex-col space-y-2 justify-start w-1/3'>
                            <h1>Make Money with Us</h1>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Sell on Amazon</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Sell under Amazon Accelerator</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Amazon Global Selling</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Become an Affiliate</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Fulfilment by Amazon</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Advertise Your Products</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Amazon Pay on Merchants</a>
                        </div>
                        <div className='flex flex-col space-y-2 justify-start w-1/3'>
                            <h1>Let Us Help You</h1>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">COVID-19 and Amazon</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Your Account</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Returns Centre</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">100% Purchase Protection</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Amazon App Download</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Amazon Assistant Download</a>
                            <a className="text-[14px] font-semibold text-gray-300 cursor-pointer hover:underline" href="#!">Help</a>
                        </div>
                    </div>
                </div>
                <div className="bg-[#232f3e] text-white flex flex-col justify-center">
                    <div className='w-5/6 m-auto flex flex-row p-10 justify-center'>
                        <div className=''>
                            <a
                                className="w-[129px] h-[50px] a-logo nav-logo-link"
                                href="#!"
                            >
                                <img
                                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                                    className="logo h-[35px] logo-img"
                                    alt="Amazon Logo"
                                />
                            </a>
                        </div>
                        <div className=''>
                            <button className="border py-1 px-3"> <LanguageIcon /> English 
                            <ArrowDropDownIcon /></button>
                        </div>
                    </div>

                    <div className='w-3/4 m-auto flex flex-wrap pb-10 justify-center text-xs space-y-2'>
                        <div className='flex flex-row space-x-4'>
                            <a className="hover:underline" href="#!">Australia</a>
                            <a className="hover:underline" href="#!">Brazil</a>
                            <a className="hover:underline" href="#!">Canada</a>
                            <a className="hover:underline" href="#!">China</a>
                            <a className="hover:underline" href="#!">France</a>
                            <a className="hover:underline" href="#!">Germany</a>
                            <a className="hover:underline" href="#!">Italy</a>
                            <a className="hover:underline" href="#!">Japan</a>
                            <a className="hover:underline" href="#!">Mexico</a>
                            <a className="hover:underline" href="#!">Netherlands</a>
                            <a className="hover:underline" href="#!">Poland</a>
                            <a className="hover:underline" href="#!">Singapore</a>
                            <a className="hover:underline" href="#!">Spain</a>
                            <a className="hover:underline" href="#!">Turkey</a>
                        </div>
                        <div className='flex flex-row space-x-4'>
                            <a className="hover:underline" href="#!">United Arab Emirates</a>
                            <a className="hover:underline" href="#!">United Kingdom</a>
                        </div>
                    </div>

                </div>

                <div className="bg-[#131a22] text-white flex flex-col justify-center">
                    <div className='w-5/6 m-auto flex flex-row p-12 pt-6'>
                        <div className='flex flex-col space-y-2 justify-start w-1/3'>
                            <a className='text-[11px] font-semibold' href="#!">AbeBooks<br />
                                <span className="text-[11px] text-gray-500 cursor-pointer hover:underline">Books, art<br />
                                    & collectibles</span></a>
                        </div>
                        <div className='flex flex-col space-y-2 justify-start w-1/3'>
                            <a className='text-[11px] font-semibold' href="#!">Amazon Web Services<br />
                                <span className="text-[11px] text-gray-500 cursor-pointer hover:underline">Scalable Cloud<br />
                                    Computing Services</span></a>
                        </div>
                        <div className='flex flex-col space-y-2 justify-start w-1/3'>
                            <a className='text-[11px] font-semibold' href="#!">Audible<br />
                                <span className="text-[11px] text-gray-500 cursor-pointer hover:underline">Download<br />
                                    Audio Books</span></a>
                        </div>
                        <div className='flex flex-col space-y-2 justify-start w-1/3'>
                            <a className='text-[11px] font-semibold' href="#!">DPReview<br />
                                <span className="text-[11px] text-gray-500 cursor-pointer hover:underline">Digital<br />
                                    Photography</span></a>
                        </div>
                        <div className='flex flex-col space-y-2 justify-start w-1/3'>
                            <a className='text-[11px] font-semibold' href="#!">IMDb<br />
                                <span className="text-[11px] text-gray-500 cursor-pointer hover:underline">Movies, TV<br />
                                    & Celebrities</span></a>
                        </div>
                    </div>
                    <div className='w-5/6 m-auto flex flex-row px-12 -mt-8'>
                        <div className='flex flex-col space-y-2 justify-start w-1/3'>
                            <a className='text-[11px] font-semibold' href="#!">Shopbop<br />
                                <span className="text-[11px] text-gray-500 cursor-pointer hover:underline">Designer<br />
                                    Fashion Brands</span></a>
                        </div>
                        <div className='flex flex-col space-y-2 justify-start w-1/3'>
                            <a className='text-[11px] font-semibold' href="#!">
                                Amazon Business<br />
                                <span className="text-[11px] text-gray-500 cursor-pointer hover:underline">SEverything For<br />
                                    Your Business</span></a>
                        </div>
                        <div className='flex flex-col space-y-2 justify-start w-1/3'>
                            <a className='text-[11px] font-semibold' href="#!">Prime Now<br />
                                <span className="text-[11px] text-gray-500 cursor-pointer hover:underline"> 2-Hour Delivery<br />
                                    on Everyday Items</span></a>
                        </div>
                        <div className='flex flex-col space-y-2 justify-start w-1/3'>
                            <a className='text-[11px] font-semibold' href="#!">Amazon Prime Music<br />
                                <span className="text-[11px] text-gray-500 cursor-pointer hover:underline">90 million songs, ad-free<br />
                                    Over 15 million podcast episodes </span></a>
                        </div>
                        <div className='flex flex-col space-y-2 justify-start w-1/3'>

                        </div>
                    </div>
                    <div className='w-2/4 m-auto flex flex-col p-12 pt-20 text-[11px] space-x-5 '>
                        <div className='flex flex-row space-x-5 hover:underline'>
                            <a href="#!">Conditions of Use & Sale</a>
                            <a href="#!">Privacy Notice</a>
                            <a href="#!">Interest-Based Ads</a>
                        </div>
                        <span className="text-[11px] text-gray-500 font-semibold">© 1996-2022, Clone for learning, Inc. or its affiliates</span>
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}

export default Footer;