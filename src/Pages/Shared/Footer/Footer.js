import React from 'react';
import './Footer.css'
import logo from '../../../images/Footer logo/gym logo.png'
import facebook from '../../../images/Footer logo/Facebook.png'
import github from '../../../images/Footer logo/GitHub.png'

const Footer = () => {
    return (
        <div className='bg-black mx-auto'>
            <div className='footer w-3/4 justify-between'>
                <div className='w-50 m-5 d-flex justify-content-start'>
                    <div className='logo text-xl font-bold'>
                        <img className='m-4 rounded-lg mb-1' src={logo} alt="" />
                        <h5 className='text-white p-0'>Join us with our fitness club</h5>
                    </div>
                    <p className='m-4 text-white mb-1 p-0'>Level-4, 104 Badda, Mouchak</p>
                    <p className='m-4 text-white mb-1 p-0'>Support: nasirAhmed8202@gmail.com</p>
                    <p className='m-4 text-white mb-1 p-0'>(Available from 9AM-5Pm)</p>
                </div>

                <div className='m-5 text-white'>
                    <p className='m-4 mb-1 p-0'>Home</p>
                    <p className='m-4 mb-1 p-0'>About us</p>
                    <p className='m-4 mb-1 p-0'>Success page</p>
                    <p className='m-4 mb-1 p-0'>Terms and Condition</p>
                </div>

                <div className='m-5 text-white'>
                    <h3 className='mb-1 m-4 text-white text-3xl p-0'>Follow us</h3>
                    <div className='flex'>
                        <img className='m-4' src={facebook} alt="" />
                        <img className='m-4 rounded-lg' src={github} alt="" />
                    </div>
                </div>

            </div>
            <div className='d-flex'>
                <div className='text-white  w-50 d-flex justify-content-center ms-5'>
                    <p className='text-center color-red m-5 p-3'>Copyright &copy; {new Date().getFullYear()} From Touring Fitness Club</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;